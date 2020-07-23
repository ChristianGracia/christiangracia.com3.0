import { Component, OnInit } from "@angular/core";

import { AnimationOptions } from "ngx-lottie";

@Component({
  selector: "app-animated-down-arrow",
  template: `<ng-lottie [options]="options"></ng-lottie>`,
  styleUrls: ["./animated-down-arrow.component.scss"],
})
export class AnimatedDownArrowComponent {
  options: AnimationOptions = {
    path: "assets/planet-animation.json",
    autoplay: true,
    loop: true,
  };

  constructor() {}
}
