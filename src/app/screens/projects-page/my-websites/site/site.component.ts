import { Component, OnInit, Input } from "@angular/core";
import { Site } from "src/app/models";

@Component({
  selector: "app-site",
  templateUrl: "./site.component.html",
  styleUrls: ["./site.component.scss"],
})
export class SiteComponent implements OnInit {
  @Input() public site: Site;

  constructor() {}

  ngOnInit() {}
}