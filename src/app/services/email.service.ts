import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { EmailMessage } from "../models/email-message.model";

@Injectable({
  providedIn: "root",
})
export class EmailService {
  constructor(private http: HttpClient) {}

  public sendContactEmail(emailMessage: EmailMessage) {
    let emailBody = {
      name: emailMessage.name,
      email: emailMessage.email,
      message: emailMessage.message,
    };
    return this.http.post(environment.apiUrl + "/email/send-email", {
      ...emailBody,
    });
  }
}
