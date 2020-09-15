import { NgModule } from "@angular/core";

import { ContentHeaderComponent } from "./content-header/content-header.component";

import { MaterialModule } from "../../material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatPaginatorModule } from "@angular/material/paginator";

@NgModule({
  imports: [
    MaterialModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
  ],
  declarations: [ContentHeaderComponent],

  exports: [
    ContentHeaderComponent,
    MaterialModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
  ],
})
export class SharedComponentsModule {}
