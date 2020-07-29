import { Component, OnInit } from "@angular/core";
import { Site } from "src/app/models";

const CHRISTIAN_GRACIA_SITE: Site = new Site(
  "christiangracia.com v2",
  `My previous site that I wrote in TypeScript with only stateless functional components and React Hooks.
  React/Redux + Sass front-end. This is hosted on a free dyno so it takes 2 mins to wake up`,
  "https://christiangracia-old.herokuapp.com/"
);

const ON_A_BEAT_SITE: Site = new Site(
  "On a Beat!",
  `MERN stack site I wrote and host for my friends in On a Beat. Hosted on Heroku on a single server.
  React/Redux front-end with a Node Js back-end and a MongoDB database. Users can make accounts, sign in,
  add/delete videos, songs, pics, and gifs to front page, and more with a site dashboard I built.`,
  "https://onabeat.com"
);

const NFL_SITE: Site = new Site(
  "Nature's Frontier Landscaping",
  "React front-end + NodeJS back-end site I made for Nature's Frontier Landscaping",
  "https://nflandscaping.com"
);

@Component({
  selector: "app-my-websites",
  templateUrl: "./my-websites.component.html",
  styleUrls: ["./my-websites.component.scss"],
})
export class MyWebsitesComponent implements OnInit {
  public sites: Site[] = [CHRISTIAN_GRACIA_SITE, ON_A_BEAT_SITE, NFL_SITE];
  // tiles: any[] = [
  //   { text: "One", cols: 1, rows: 1, color: "lightblue" },
  //   { text: "Two", cols: 1, rows: 1, color: "lightgreen" },
  //   { text: "Three", cols: 1, rows: 1, color: "lightpink" },
  // ];
  constructor() {}

  ngOnInit() {
    this.sites.forEach((x) => console.log(x));
    console.log(this.sites);
  }
}
