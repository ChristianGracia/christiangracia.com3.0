import { NgModule } from "@angular/core";

import { ContactRoutingModule } from "./contact-routing.module";
import { ContactComponent } from "./contact.component";
import { ContactFormComponent } from "./components/contact-form/contact-form.component";

import { SharedComponentsModule } from "../shared-components/shared-components.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [ContactComponent, ContactFormComponent],
  imports: [ContactRoutingModule, SharedComponentsModule, FormsModule],
})
export class ContactModule {}
