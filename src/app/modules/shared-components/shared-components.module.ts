import { NgModule } from "@angular/core";

import { ContentHeaderComponent } from "./content-header/content-header.component";
import { FlexLayoutModule } from "@angular/flex-layout";

import { MaterialModule } from "../../material.module";
import { LottieModule } from "ngx-lottie";
import player from "lottie-web";

export function playerFactory() {
  return player;
}
@NgModule({
  imports: [
    FlexLayoutModule,
    MaterialModule,
    LottieModule.forRoot({ player: playerFactory }),
  ],
  declarations: [ContentHeaderComponent],

  exports: [
    ContentHeaderComponent,
    FlexLayoutModule,
    MaterialModule,
    LottieModule,
  ],
})
export class SharedComponentsModule {}
