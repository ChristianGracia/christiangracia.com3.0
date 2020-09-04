import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProjectsComponent } from "./projects.component";
import { ProjectsRoutingModule } from "./projects-routing.module";
import { GithubRepoComponent } from "./components/github-repo/github-repo.component";
import { MyWebsitesComponent } from "./components/my-websites/my-websites.component";
import { SiteComponent } from "./components/my-websites/site/site.component";
import { SharedComponentsModule } from "../shared-components/shared-components.module";

@NgModule({
  declarations: [
    ProjectsComponent,
    GithubRepoComponent,
    MyWebsitesComponent,
    SiteComponent,
  ],
  imports: [CommonModule, ProjectsRoutingModule, SharedComponentsModule],
})
export class ProjectsModule {}
