import { NgModule } from "@angular/core";

import { ContentHeaderComponent } from "./content-header/content-header.component";

import { MaterialModule } from "../../material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { MatRippleModule } from "@angular/material/core";
import { CommonModule } from "@angular/common";
@NgModule({
  imports: [
    MaterialModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatTableModule,
    MatRippleModule,
    CommonModule,
  ],
  declarations: [ContentHeaderComponent],

  exports: [
    ContentHeaderComponent,
    MaterialModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatTableModule,
    MatRippleModule,
    CommonModule,
  ],
})
export class SharedComponentsModule {}
