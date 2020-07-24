import { Component, OnInit, SystemJsNgModuleLoader } from "@angular/core";
import { RoutingService } from "../../../services/routing.service";

@Component({
  selector: "app-personal-info",
  templateUrl: "./personal-info.component.html",
  styleUrls: ["./personal-info.component.scss"],
})
export class PersonalInfoComponent implements OnInit {
  constructor(private routingService: RoutingService) {}

  showCopiedText: boolean = false;

  showCopyHint: boolean = false;

  ngOnInit() {}
  navigateToSiteContent() {
    this.routingService.navigateToSiteContent();
  }
  copyToKeyboard() {
    let mockElement = document.createElement("textarea");

    mockElement.style.display = "none";
    document.body.appendChild(mockElement);

    mockElement.value = "christianmgracia@gmail.com";
    mockElement.select();
    document.execCommand("copy");
    document.body.removeChild(mockElement);

    this.showCopiedText = true;
    setTimeout(() => {
      this.showCopiedText = false;
    }, 1000);
  }
}
