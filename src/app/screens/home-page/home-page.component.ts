import { Component, ElementRef, OnInit, AfterViewInit } from "@angular/core";
import { RoutingService } from "../../services/routing.service";
import { LocationService } from "../../services/location.service";
import { EmailService } from "../../services/email.service";
import { LocationData } from "../../models/location-data.model";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnInit, AfterViewInit {
  public navigatingToSite: boolean = false;

  constructor(
    private elementRef: ElementRef,
    private routingService: RoutingService,
    private emailService: EmailService,
    private locationService: LocationService
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.elementRef.nativeElement
      .querySelector("#touch-container")
      .addEventListener("touchstart", this.startWatchingTouch.bind(this), {
        passive: true,
      });
  }

  private handleSwipeUp(initialY: number) {
    this.elementRef.nativeElement
      .querySelector("#touch-container")
      .addEventListener(
        "touchend",
        (event) => {
          let currentY = event.changedTouches[0].screenY;

          let offset = -45;
          if (currentY - initialY < offset) {
            this.navigatingToSite = true;

            this.locationService
              .getLocationJSON()
              .subscribe((locationData: LocationData) => {
                this.emailService
                  .sendSiteVisitEmail(locationData)
                  .subscribe(() => {});
              });
            this.routingService.navigateToAbout();
          }
        },
        { passive: true }
      );
  }

  private startWatchingTouch(event: any) {
    if (!this.navigatingToSite) {
      this.handleSwipeUp(event.changedTouches[0].screenY);
    }
  }
}
