import { NgModule } from "@angular/core";

import { ContentHeaderComponent } from "./content-header/content-header.component";

import { MaterialModule } from "../../material.module";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  imports: [MaterialModule, FlexLayoutModule],
  declarations: [ContentHeaderComponent],

  exports: [ContentHeaderComponent, MaterialModule, FlexLayoutModule],
})
export class SharedComponentsModule {}
