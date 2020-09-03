import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material.module";

import { FlexLayoutModule } from "@angular/flex-layout";

import { FormsModule } from "@angular/forms";

import { LottieModule } from "ngx-lottie";
import player from "lottie-web";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomePageComponent } from "./screens/home-page/home-page.component";
import { AboutPageComponent } from "./screens/about-page/about-page.component";
import { ContactPageComponent } from "./screens/contact-page/contact-page.component";
import { HeaderComponent } from "./navigation/header/header.component";
import { ProjectsPageComponent } from "./screens/projects-page/projects-page.component";
import { SideNavigationBarComponent } from "./navigation/side-navigation-bar/side-navigation-bar.component";
import { PersonalInfoComponent } from "./screens/home-page/personal-info/personal-info.component";
import { AnimatedDownArrowComponent } from "./components/animated-down-arrow/animated-down-arrow.component";
import { LightningBoltComponent } from "./components/lightning-bolt/lightning-bolt.component";
import { SocialMediaLinksComponent } from "./screens/home-page/social-media-links/social-media-links.component";
import { ContactFormComponent } from "./screens/contact-page/contact-form/contact-form.component";
import { GithubRepoComponent } from "./screens/projects-page/github-repo/github-repo.component";
import { AboutMeComponent } from "./screens/about-page/about-me/about-me.component";
import { SkillsComponent } from "./screens/about-page/skills/skills.component";
import { CurrentJobComponent } from "./screens/about-page/current-job/current-job.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HttpClientModule } from "@angular/common/http";
import { SkillCardComponent } from "./components/skill-card/skill-card.component";
import { MyWebsitesComponent } from "./screens/projects-page/my-websites/my-websites.component";
import { SiteComponent } from "./screens/projects-page/my-websites/site/site.component";

import { SlideshowModule } from "ng-simple-slideshow";
import { ContentHeaderComponent } from './components/content-header/content-header.component';
import { MainInfoPageComponent } from './screens/main-info-page/main-info-page.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    HeaderComponent,
    ProjectsPageComponent,
    SideNavigationBarComponent,
    PersonalInfoComponent,
    AnimatedDownArrowComponent,
    LightningBoltComponent,
    SocialMediaLinksComponent,
    ContactFormComponent,
    GithubRepoComponent,
    AboutMeComponent,
    SkillsComponent,
    CurrentJobComponent,
    FooterComponent,
    SkillCardComponent,
    MyWebsitesComponent,
    SiteComponent,
    ContentHeaderComponent,
    MainInfoPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SlideshowModule,

    LottieModule.forRoot({ player: playerFactory }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
