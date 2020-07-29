import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-my-websites",
  templateUrl: "./my-websites.component.html",
  styleUrls: ["./my-websites.component.scss"],
})
export class MyWebsitesComponent implements OnInit {
  public sites: any[] = [];
  // tiles: any[] = [
  //   { text: "One", cols: 1, rows: 1, color: "lightblue" },
  //   { text: "Two", cols: 1, rows: 1, color: "lightgreen" },
  //   { text: "Three", cols: 1, rows: 1, color: "lightpink" },
  // ];
  constructor() {}

  ngOnInit() {}
}
