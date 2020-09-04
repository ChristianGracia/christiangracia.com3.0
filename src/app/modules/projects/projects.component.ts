import { Component, OnInit, AfterViewInit } from "@angular/core";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit() {}
  ngAfterViewInit() {
    // Hack: Scrolls to top of Page after page view initialized
    let top = document.getElementById("top");
    if (top !== null) {
      top.scrollIntoView();
      top = null;
    }
  }
}
