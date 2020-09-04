import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./screens/home-page/home-page.component";
import { AboutPageComponent } from "./screens/about-page/about-page.component";

import { MainInfoPageComponent } from "./screens/main-info-page/main-info-page.component";

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent,
  },
  {
    path: "main",
    component: MainInfoPageComponent,
  },
  {
    path: "about",
    component: AboutPageComponent,
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
