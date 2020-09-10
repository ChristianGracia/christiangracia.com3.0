import { NgModule } from "@angular/core";

import { ContentHeaderComponent } from "./content-header/content-header.component";

import { MaterialModule } from "../../material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@NgModule({
  imports: [MaterialModule, FlexLayoutModule, MatProgressSpinnerModule],
  declarations: [ContentHeaderComponent],

  exports: [
    ContentHeaderComponent,
    MaterialModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
  ],
})
export class SharedComponentsModule {}
