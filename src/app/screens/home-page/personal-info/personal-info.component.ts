import { Component, OnInit, SystemJsNgModuleLoader } from "@angular/core";
import { RoutingService } from "../../../services/routing.service";

@Component({
  selector: "app-personal-info",
  templateUrl: "./personal-info.component.html",
  styleUrls: ["./personal-info.component.scss"],
})
export class PersonalInfoComponent implements OnInit {
  constructor(private routingService: RoutingService) {}

  public showCopiedText = false;

  public showCopyHint = false;

  public showDownArrow = false;

  ngOnInit() {
    this.showDownArrowAnimation();
  }

  showDownArrowAnimation() {
    setTimeout(() => {
      this.showDownArrow = true;
      setTimeout(() => {
        this.showDownArrow = false;
      }, 4000);
    }, 2000);
  }
  navigateToSiteContent() {
    this.routingService.navigateToSiteContent();
  }
  copyToKeyboard() {
    this.showCopyHint = false;
    const mockElement = document.createElement("textarea");

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
