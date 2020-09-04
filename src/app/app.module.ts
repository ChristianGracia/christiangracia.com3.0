import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { LottieModule } from "ngx-lottie";
import player from "lottie-web";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomePageComponent } from "./screens/home-page/home-page.component";
import { AboutPageComponent } from "./screens/about-page/about-page.component";
import { HeaderComponent } from "./navigation/header/header.component";

import { SideNavigationBarComponent } from "./navigation/side-navigation-bar/side-navigation-bar.component";
import { PersonalInfoComponent } from "./screens/home-page/personal-info/personal-info.component";
import { AnimatedDownArrowComponent } from "./components/animated-down-arrow/animated-down-arrow.component";
import { LightningBoltComponent } from "./components/lightning-bolt/lightning-bolt.component";
import { SocialMediaLinksComponent } from "./screens/home-page/social-media-links/social-media-links.component";

import { AboutMeComponent } from "./screens/about-page/about-me/about-me.component";
import { SkillsComponent } from "./screens/about-page/skills/skills.component";
import { CurrentJobComponent } from "./screens/about-page/current-job/current-job.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HttpClientModule } from "@angular/common/http";
import { SkillCardComponent } from "./components/skill-card/skill-card.component";

import { MainInfoPageComponent } from "./screens/main-info-page/main-info-page.component";
import { SharedComponentsModule } from "./modules/shared-components/shared-components.module";

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    HeaderComponent,

    SideNavigationBarComponent,
    PersonalInfoComponent,
    AnimatedDownArrowComponent,
    LightningBoltComponent,
    SocialMediaLinksComponent,

    AboutMeComponent,
    SkillsComponent,
    CurrentJobComponent,
    FooterComponent,
    SkillCardComponent,

    MainInfoPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AppRoutingModule,
    HttpClientModule,

    LottieModule.forRoot({ player: playerFactory }),

    SharedComponentsModule,
  ],
  // exports: [MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
