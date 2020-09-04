import { NgModule } from "@angular/core";

import { ContentHeaderComponent } from "./content-header/content-header.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../../material.module";
import { SlideshowModule } from "ng-simple-slideshow";
import { LottieModule } from "ngx-lottie";
import player from "lottie-web";

export function playerFactory() {
  return player;
}

@NgModule({
  imports: [
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    SlideshowModule,

    SlideshowModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  declarations: [ContentHeaderComponent],

  exports: [
    ContentHeaderComponent,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    SlideshowModule,

    SlideshowModule,
    LottieModule,
  ],
})
export class SharedComponentsModule {
  // static forRoot() {
  //   return {
  //     ngModule: SharedComponentsModule,
  //   };
  // }
}
