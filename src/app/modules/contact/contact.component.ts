import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  public showHeader: boolean = true;

  constructor() {}

  ngOnInit() {}

  hideHeader(event) {
    if (event) {
      console.log(event);
      this.showHeader = false;
    }
  }
}
