import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
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

@NgModule({
  declarations: [
    ProjectsComponent,
    GithubRepoComponent,
    MyWebsitesComponent,
    SiteComponent,
    ViewCommitModalComponent,
    ViewSiteModalComponent,
    SafePipe,
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedComponentsModule,
    SlideshowModule,
    MatDialogModule,
  ],
  entryComponents: [ViewCommitModalComponent, ViewSiteModalComponent],
})
export class ProjectsModule {}
