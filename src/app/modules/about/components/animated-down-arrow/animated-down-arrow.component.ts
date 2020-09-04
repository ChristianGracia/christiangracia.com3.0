import { Component } from "@angular/core";

import { AnimationOptions } from "ngx-lottie";

@Component({
  selector: "app-animated-down-arrow",
  template: `<ng-lottie [options]="options"></ng-lottie>`,
  styleUrls: ["./animated-down-arrow.component.scss"],
})
export class AnimatedDownArrowComponent {
  options: AnimationOptions = {
    path: "./grey-swipe-down.json",
    autoplay: true,
    loop: true,
  };

  constructor() {}
}
