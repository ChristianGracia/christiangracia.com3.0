import { Component, OnInit } from "@angular/core";
import { Site } from "../../../shared-components/models/site.model";

const NFL_SITE: Site = new Site(
  "Nature's Frontier Landscaping",
  "React front-end + NodeJS back-end site I made for Nature's Frontier Landscaping. Live at nflandscaping.com. Will be rewritten soon, I made this while just learning React",
  "https://www.nflandscaping.com",
  [
    "https://i.imgur.com/TTgeW7Y.jpeg",
    "https://i.imgur.com/dufsNaC.png",
    "https://i.imgur.com/TIkU3jl.png",
  ]
);

const MARKETFEELS: Site = new Site(
  "MarketFeels",
  "Server side rendered React + Redux finance site written in TypeScript",
  "https://marketfeels.com",
  ["https://i.imgur.com/D1ualvH.jpeg"]
);
@Component({
  selector: "app-side-projects",
  templateUrl: "./side-projects.component.html",
  styleUrls: ["./side-projects.component.scss"],
})
export class SideProjectsComponent implements OnInit {
  public sites: Site[] = [MARKETFEELS, NFL_SITE];

  constructor() {}

  ngOnInit() {}
}
