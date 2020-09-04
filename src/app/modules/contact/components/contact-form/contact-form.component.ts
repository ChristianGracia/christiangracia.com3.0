import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { EmailService } from "../../../shared-components/services/email.service";
import { EmailMessage } from "./../../../shared-components/models/email-message.model";
import { RoutingService } from "src/app/services/routing.service";

import { LocationData } from "./../../../shared-components/models/location-data.model";
import { LocationService } from "../../../shared-components/services/location.service";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.scss"],
})
export class ContactFormComponent implements OnInit {
  constructor(
    private emailService: EmailService,
    private routingService: RoutingService,
    private locationService: LocationService
  ) {}

  emailReceived: boolean = false;

  ngOnInit() {}

  submit(form: NgForm) {
    const messageParams = new EmailMessage(
      form.value.name,
      form.value.email,
      form.value.message
    );
    this.locationService
      .getLocationJSON()
      .subscribe((locationData: LocationData) => {
        this.emailService.sendSiteVisitEmail(locationData).subscribe(() => {});
      });
    this.emailService.sendContactEmail(messageParams).subscribe((data: any) => {
      if (data.name) {
        this.emailReceived = true;
      }
    });
  }

  goToSite() {
    this.routingService.navigateToHomePage();
  }
}
