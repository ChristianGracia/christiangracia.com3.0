import { Component, OnInit, ElementRef, AfterViewInit } from "@angular/core";
import { RoutingService } from "../../services/routing.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
})
export class HomePageComponent implements OnInit {
  public navigatingToSite: boolean = false;
  constructor(
    private elementRef: ElementRef,
    private routingService: RoutingService
  ) {}

  ngOnInit() {}
  ngAfterViewInit(): void {
    this.elementRef.nativeElement
      .querySelector("#touch-container")
      .addEventListener("touchstart", this.startWatchingTouch.bind(this));
  }
  startWatchingTouch(event) {
    if (!this.navigatingToSite) {
      this.handleSwipeUp(event.changedTouches[0].screenY);
    }
  }

  handleSwipeUp(initialY: number) {
    this.elementRef.nativeElement
      .querySelector("#touch-container")
      .addEventListener("touchend", (event) => {
        let currentY = event.changedTouches[0].screenY;

        let offset = -60;

        //leaving both swipe up and swipe down as a trigger for now
        if (currentY - initialY < offset || initialY - currentY < offset) {
          this.navigatingToSite = true;
          this.routingService.navigateToSiteContent();
        }
      });
  }
}
