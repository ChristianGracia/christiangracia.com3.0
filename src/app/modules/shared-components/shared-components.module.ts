import { NgModule } from "@angular/core";

import { ContentsHeaderComponent } from "./contents-header/content-header.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [FlexLayoutModule, FormsModule],
  declarations: [ContentsHeaderComponent],

  exports: [ContentsHeaderComponent, FlexLayoutModule, FormsModule],
})
export class SharedComponentsModule {
  // static forRoot() {
  //   return {
  //     ngModule: SharedComponentsModule,
  //   };
  // }
}
