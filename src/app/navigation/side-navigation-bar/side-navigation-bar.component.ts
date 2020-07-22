import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-side-navigation-bar",
  templateUrl: "./side-navigation-bar.component.html",
  styleUrls: ["./side-navigation-bar.component.scss"],
})
export class SideNavigationBarComponent implements OnInit {
  @Output() closeSidenavEvent = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  onClose() {
    this.closeSidenavEvent.emit();
  }
}
