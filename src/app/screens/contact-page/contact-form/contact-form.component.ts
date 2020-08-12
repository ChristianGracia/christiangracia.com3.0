import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { EmailService } from "../../../services/email.service";
import { EmailMessage } from "src/app/models/email-message.model";
import { RoutingService } from "src/app/services/routing.service";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.scss"],
})
export class ContactFormComponent implements OnInit {
  constructor(
    private emailService: EmailService,
    private routingService: RoutingService
  ) {}

  emailReceived: boolean = false;

  ngOnInit() {}

  submit(form: NgForm) {
    const messageParams = new EmailMessage(
      form.value.name,
      form.value.email,
      form.value.message
    );
    this.emailService.sendContactEmail(messageParams).subscribe((data) => {
      if (data.name) {
        this.emailReceived = true;
      }
    });
  }

  goToSite() {
    this.routingService.navigateToHomePage();
  }
}
