import { NgModule } from "@angular/core";
import { ProjectsComponent } from "./projects.component";
import { ProjectsRoutingModule } from "./projects-routing.module";
import { GithubRepoComponent } from "./components/github-repo/github-repo.component";
import { MyWebsitesComponent } from "./components/my-websites/my-websites.component";
import { SiteComponent } from "./components/my-websites/site/site.component";
import { SharedComponentsModule } from "../shared-components/shared-components.module";
import { SlideshowModule } from "ng-simple-slideshow";
import { ViewCommitModalComponent } from "./modals/view-commit-modal/view-commit-modal.component";
import { ViewSiteModalComponent } from "./modals/view-site-modal/view-site-modal.component";
import { MatDialogModule } from "@angular/material/dialog";
import { SafePipe } from "./services/safe.pipe";
import { RepoCommitModalComponent } from "./modals/repo-commit-modal/repo-commit-modal.component";

@NgModule({
  declarations: [
    ProjectsComponent,
    GithubRepoComponent,
    MyWebsitesComponent,
    SiteComponent,
    ViewCommitModalComponent,
    ViewSiteModalComponent,
    SafePipe,
    RepoCommitModalComponent,
  ],
  imports: [
    ProjectsRoutingModule,
    SharedComponentsModule,
    SlideshowModule,
    MatDialogModule,
  ],
  entryComponents: [
    ViewCommitModalComponent,
    RepoCommitModalComponent,
    ViewSiteModalComponent,
  ],
})
export class ProjectsModule {}
