import { Component } from "@angular/core";

import { AnimationOptions } from "ngx-lottie";

@Component({
  selector: "app-lightning-bolt",
  template: `<ng-lottie [options]="options"></ng-lottie>`,
  styleUrls: ["./lightning-bolt.component.scss"],
})
export class LightningBoltComponent {
  constructor() {}

  options: AnimationOptions = {
    path: "../../assets/tech-hello.json",
    autoplay: true,
    loop: true,
  };
}
