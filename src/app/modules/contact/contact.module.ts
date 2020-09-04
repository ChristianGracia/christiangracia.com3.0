import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ContactRoutingModule } from "./contact-routing.module";
import { ContactComponent } from "./contact.component";
import { MaterialModule } from "../../material.module";
import { ContactFormComponent } from "./components/contact-form/contact-form.component";

import { SharedComponentsModule } from "../shared-components/shared-components.module";

@NgModule({
  declarations: [ContactComponent, ContactFormComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    MaterialModule,
    SharedComponentsModule,
  ],
})
export class ContactModule {}
