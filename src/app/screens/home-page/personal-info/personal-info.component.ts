import { Component, OnInit } from "@angular/core";
import { RoutingService } from "../../../services/routing.service";

@Component({
  selector: "app-personal-info",
  templateUrl: "./personal-info.component.html",
  styleUrls: ["./personal-info.component.scss"],
})
export class PersonalInfoComponent implements OnInit {
  constructor(private routingService: RoutingService) {}

  ngOnInit() {}
  navigateToSiteContent() {
    console.log("hi");
    this.routingService.navigateToSiteContent();
  }
}
