import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { EmailService } from "../../../services/email.service";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.scss"],
})
export class ContactFormComponent implements OnInit {
  constructor(private emailService: EmailService) {}

  ngOnInit() {}

  submit(form: NgForm) {
    console.log(form);
    let messageParams = {
      ...form.value,
    };

    let url = "https://sendpoint.io/id/gWFzbxh9O";
    this.emailService
      .sendContactEmail(url, messageParams)
      .subscribe((data) => console.log(data));
  }
}
