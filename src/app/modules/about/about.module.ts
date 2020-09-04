import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SkillsComponent } from "./components/skills/skills.component";
import { CurrentJobComponent } from "./components/current-job/current-job.component";
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { SharedComponentsModule } from "../shared-components/shared-components.module";
import { AnimatedDownArrowComponent } from "./components/animated-down-arrow/animated-down-arrow.component";
import { AboutRoutingModule } from "./about-routing.module";
import { AboutComponent } from "./about.component";

@NgModule({
  declarations: [
    SkillsComponent,
    AboutMeComponent,
    CurrentJobComponent,
    SkillsComponent,
    AnimatedDownArrowComponent,
    AboutComponent,
  ],
  imports: [CommonModule, AboutRoutingModule, SharedComponentsModule],
})
export class AboutModule {}