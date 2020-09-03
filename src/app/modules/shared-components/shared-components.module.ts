import { NgModule } from "@angular/core";

import { ContentsHeaderComponent } from "./contents-header/content-header.component";

@NgModule({
  declarations: [ContentsHeaderComponent],

  exports: [ContentsHeaderComponent],
})
export class SharedComponentsModule {
  // static forRoot() {
  //   return {
  //     ngModule: SharedComponentsModule,
  //   };
  // }
}
