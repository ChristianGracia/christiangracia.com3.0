import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  public notOnRoot: boolean = false;
  @Output()
  sidenavToggle = new EventEmitter<void>();
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.notOnRoot = event.url.length > 1 ? true : false;
      }
    });
  }
  onToggleSidenav() {
    this.sidenavToggle.emit();
  }
}
