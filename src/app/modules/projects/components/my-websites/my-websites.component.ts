import { Component, OnInit } from "@angular/core";
import { Site } from "../../models/site.model";

const CHRISTIAN_GRACIA_SITE: Site = new Site(
  "christiangracia.com v2",
  `My previous site that I wrote in TypeScript with only stateless functional components and React Hooks.
  React/Redux + Sass front-end.`,
  "https://christiangracia-old.herokuapp.com/",
  [
    "https://i.imgur.com/dga9J4G.jpg",
    "https://i.imgur.com/SKBvjbr.jpg",
    "https://i.imgur.com/gNBNVGJ.jpg",
  ]
);

const ON_A_BEAT_SITE: Site = new Site(
  "On a Beat!",
  `A MERN stack site I wrote while learning to code, React/Redux front-end with a Node Js back-end and a MongoDB database. Users can make accounts, sign in,
  add/delete videos, songs, pics, and gifs to front page, and more with a site dashboard I built`,
  "https://onabeat.herokuapp.com/",
  [
    "https://i.imgur.com/h9Bm4yj.jpeg",
    "https://i.imgur.com/7zTCFnk.png",
    "https://i.imgur.com/4eXhLGA.png",
    "https://i.imgur.com/c68FKLo.jpeg",
  ]
);

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

@Component({
  selector: "app-my-websites",
  templateUrl: "./my-websites.component.html",
  styleUrls: ["./my-websites.component.scss"],
})
export class MyWebsitesComponent implements OnInit {
  public sites: Site[] = [ON_A_BEAT_SITE, NFL_SITE, CHRISTIAN_GRACIA_SITE];

  constructor() {}

  ngOnInit() {}
}
