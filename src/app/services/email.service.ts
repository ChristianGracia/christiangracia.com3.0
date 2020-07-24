import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class EmailService {
  constructor(private http: HttpClient) {}

  public sendContactEmail(url: string, formData: string[]) {
    console.log("hi");
    return this.http.post(url, formData);
  }
}
