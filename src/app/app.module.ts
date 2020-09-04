import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomePageComponent } from "./screens/home-page/home-page.component";

import { HeaderComponent } from "./navigation/header/header.component";

import { SideNavigationBarComponent } from "./navigation/side-navigation-bar/side-navigation-bar.component";
import { PersonalInfoComponent } from "./screens/home-page/personal-info/personal-info.component";

import { SocialMediaLinksComponent } from "./screens/home-page/social-media-links/social-media-links.component";

import { FooterComponent } from "./components/footer/footer.component";
import { HttpClientModule } from "@angular/common/http";

import { SharedComponentsModule } from "./modules/shared-components/shared-components.module";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,

    HeaderComponent,
    SideNavigationBarComponent,
    PersonalInfoComponent,
    SocialMediaLinksComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedComponentsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
