import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-site",
  templateUrl: "./site.component.html",
  styleUrls: ["./site.component.scss"],
})
export class SiteComponent implements OnInit {
  @Input() public site;

  constructor() {}

  ngOnInit() {}
}
