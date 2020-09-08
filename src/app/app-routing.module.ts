import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { HomePageComponent } from "./screens/home-page/home-page.component";

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent,
  },

  {
    path: "about",
    loadChildren: () =>
      import("./modules/about/about.module").then((m) => m.AboutModule),
  },
  {
    path: "projects",
    loadChildren: () =>
      import("./modules/projects/projects.module").then(
        (m) => m.ProjectsModule
      ),
  },
  {
    path: "contact",
    loadChildren: () =>
      import("./modules/contact/contact.module").then((m) => m.ContactModule),
  },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
