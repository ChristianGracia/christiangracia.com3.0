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

  public showTechAnimation = false;

  ngOnInit() {
    this.showDownArrowAnimation();
    setTimeout(() => {
      this.showTechAnimation = true;
    }, 3000);
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

    var mockElement = document.createElement("textarea");
    mockElement.value = "christianmgracia@gmail.com";
    document.body.appendChild(mockElement);
    mockElement.select();
    document.execCommand("Copy");
    mockElement.remove();

    this.showCopiedText = true;
    setTimeout(() => {
      this.showCopiedText = false;
    }, 1000);
  }
}
