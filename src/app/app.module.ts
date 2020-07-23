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
import { LightningBoltComponent } from './components/lightning-bolt/lightning-bolt.component';

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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    AppRoutingModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
