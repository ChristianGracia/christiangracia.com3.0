import { Component, OnInit } from "@angular/core";

const LANGUAGES = ["JavaScript"];

const TECHNOLOGIES = ["Git"];

const SKILLS = ["Algorithns", "Agile"];

const LIBRARY_AND_FRAMEWORKS = ["React"];

@Component({
  selector: "app-about-me",
  templateUrl: "./about-me.component.html",
  styleUrls: ["./about-me.component.scss"],
})
export class AboutMeComponent implements OnInit {
  public languagesArray: string[] = LANGUAGES;
  public technologiesArray: string[] = TECHNOLOGIES;
  public skillsArray: string[] = SKILLS;
  public librariesAndFrameworksArray: string[] = LIBRARY_AND_FRAMEWORKS;

  constructor() {}

  ngOnInit() {
    console.log(this.languagesArray);
  }
}
