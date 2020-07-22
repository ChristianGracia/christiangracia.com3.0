import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./screens/home-page/home-page.component";
import { AboutPageComponent } from "./screens/about-page/about-page.component";
import { ContactPageComponent } from "./screens/contact-page/contact-page.component";
import { ProjectsPageComponent } from "./screens/projects-page/projects-page.component";

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent,
  },
  {
    path: "about",
    component: AboutPageComponent,
  },
  {
    path: "contact",
    component: ContactPageComponent,
  },
  {
    path: "projects",
    component: ProjectsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
