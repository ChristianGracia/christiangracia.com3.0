import { NgModule } from "@angular/core";
import { SharedComponentsModule } from "../shared-components/shared-components.module";
import { AnimatedDownArrowComponent } from "./components/animated-down-arrow/animated-down-arrow.component";
import { AboutRoutingModule } from "./about-routing.module";
import { AboutComponent } from "./about.component";

import { LottieModule } from "ngx-lottie";
import player from "lottie-web";
import { SkillsComponent } from "./components/skills/skills.component";
import { AboutHeroImageComponent } from "./components/about-hero-image/about-hero-image.component";
import { JobHistoryComponent } from "./components/job-history/job-history.component";

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AnimatedDownArrowComponent,
    AboutComponent,
    SkillsComponent,
    AboutHeroImageComponent,
    JobHistoryComponent,
  ],
  imports: [
    AboutRoutingModule,
    SharedComponentsModule,

    LottieModule.forRoot({ player: playerFactory }),
  ],
})
export class AboutModule {}
