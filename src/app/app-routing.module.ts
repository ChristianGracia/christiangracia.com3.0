import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./screens/home-page/home-page.component";
import { AboutPageComponent } from "./screens/about-page/about-page.component";
import { ContactPageComponent } from "./screens/contact-page/contact-page.component";

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
