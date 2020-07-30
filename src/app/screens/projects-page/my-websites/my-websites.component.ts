import { Component, OnInit } from "@angular/core";
import { Site } from "src/app/models";

const CHRISTIAN_GRACIA_SITE: Site = new Site(
  "christiangracia.com v2",
  `My previous site that I wrote in TypeScript with only stateless functional components and React Hooks.
  React/Redux + Sass front-end. This is hosted on a free dyno so it takes 2 mins to wake up`,
  "https://christiangracia-old.herokuapp.com/",
  [
    "https://www.ilac.com/wp-content/uploads/2019/06/placeholder-600x400.png",
    "https://www.ilac.com/wp-content/uploads/2019/06/placeholder-600x400.png",
    "https://www.ilac.com/wp-content/uploads/2019/06/placeholder-600x400.png",
  ]
);

const ON_A_BEAT_SITE: Site = new Site(
  "On a Beat!",
  `MERN stack site I wrote and host for my friends in On a Beat. Hosted on Heroku on a single server.
  React/Redux front-end with a Node Js back-end and a MongoDB database. Users can make accounts, sign in,
  add/delete videos, songs, pics, and gifs to front page, and more with a site dashboard I built.`,
  "https://www.onabeat.com",
  [
    "https://i.imgur.com/h9Bm4yj.jpeg",
    "https://i.imgur.com/7zTCFnk.png",
    "https://i.imgur.com/4eXhLGA.png",
    "https://i.imgur.com/c68FKLo.jpeg",
  ]
);

const NFL_SITE: Site = new Site(
  "Nature's Frontier Landscaping",
  "React front-end + NodeJS back-end site I made for Nature's Frontier Landscaping",
  "https://www.nflandscaping.com",
  [
    "https://i.imgur.com/TTgeW7Y.jpeg",
    "https://i.imgur.com/dufsNaC.png",
    "https://i.imgur.com/TIkU3jl.png",
  ]
);

@Component({
  selector: "app-my-websites",
  templateUrl: "./my-websites.component.html",
  styleUrls: ["./my-websites.component.scss"],
})
export class MyWebsitesComponent implements OnInit {
  public sites: Site[] = [ON_A_BEAT_SITE, NFL_SITE, CHRISTIAN_GRACIA_SITE];

  constructor() {}

  ngOnInit() {
    this.sites.forEach((x) => console.log(x));
    console.log(this.sites);
  }
}
