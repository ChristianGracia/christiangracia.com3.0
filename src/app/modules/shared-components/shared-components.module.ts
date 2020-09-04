import { NgModule } from "@angular/core";

import { ContentHeaderComponent } from "./content-header/content-header.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../../material.module";
import { SlideshowModule } from "ng-simple-slideshow";

@NgModule({
  imports: [FlexLayoutModule, FormsModule, MaterialModule, SlideshowModule],
  declarations: [ContentHeaderComponent],

  exports: [
    ContentHeaderComponent,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    SlideshowModule,
  ],
})
export class SharedComponentsModule {
  // static forRoot() {
  //   return {
  //     ngModule: SharedComponentsModule,
  //   };
  // }
}
