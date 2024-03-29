import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "./material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomePageComponent } from "./screens/home-page/home-page.component";
import { HeaderComponent } from "./navigation/header/header.component";
import { SideNavigationBarComponent } from "./navigation/side-navigation-bar/side-navigation-bar.component";
import { PersonalInfoComponent } from "./screens/home-page/personal-info/personal-info.component";
import { SocialMediaLinksComponent } from "./screens/home-page/social-media-links/social-media-links.component";
import { FooterComponent } from "./components/footer/footer.component";

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
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
