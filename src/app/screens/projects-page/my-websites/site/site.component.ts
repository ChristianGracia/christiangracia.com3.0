import { Component, OnInit, Input } from "@angular/core";
import { Site } from "src/app/models";

@Component({
  selector: "app-site",
  templateUrl: "./site.component.html",
  styleUrls: ["./site.component.scss"],
})
export class SiteComponent implements OnInit {
  @Input() public site: Site;
  public onabeatImageUrls: string[] = [
    "https://i.imgur.com/h9Bm4yj.jpeg",
    "https://i.imgur.com/7zTCFnk.png",
    "https://i.imgur.com/TIkU3jl.png",
    "https://i.imgur.com/c68FKLo.jpeg",
  ];

  constructor() {}

  ngOnInit() {}
}
