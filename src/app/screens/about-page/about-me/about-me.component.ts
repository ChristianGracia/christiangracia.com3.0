import { Component, OnInit } from "@angular/core";

const LANGUAGES = [
  "JavaScript",
  "Java",
  "Python",
  "C#",
  "Ruby",
  "Swift",
  "C",
  "TypeScript",
  "HTML/CSS + Sass",
];

const FRONTEND_SKILLS = [
  "React",
  "Angular",
  "React Native",
  "Vue.js",
  "mobile iOS/Android",

  // "SQL/PostgreSQL",
  // "NoSQL",
  // "Git",
  // "Docker",
  // "Heroku",
  // ".NET/.NET CORE",
  // "ASP.NET MVC",
  // "NPM",
  // "Linux",
];

const BACKEND_SKILLS = [
  // "API Design",
  // "REST"z
  // "iOS mobile development",
  // "Algorithns",
  // "Agile",
  // "Unit Testing",
  // "MERN stacks",
  // "OOP",
  // "SOLID",
  // "TDD",
];

const LIBRARY_AND_FRAMEWORKS = [
  // "NodeJs",
  // "React",
  // "Angular",
  // "React Native",
  // "Rails/RoR",
  // "Django",
  // "Flask",
  // "VueJS",
  // "Redux",
  // "NgRx",
  // "GraphQL",
  // "jQuery",
  // "Bootstrap",
  // "Material Design",
];

@Component({
  selector: "app-about-me",
  templateUrl: "./about-me.component.html",
  styleUrls: ["./about-me.component.scss"],
})
export class AboutMeComponent implements OnInit {
  public languagesArray: string[] = [LANGUAGES.join(", ")];
  public frontendArray: string[] = [FRONTEND_SKILLS.join(", ")];
  // public skillsArray: string[] = [SKILLS.join(", ")];
  public librariesAndFrameworksArray: string[] = [
    LIBRARY_AND_FRAMEWORKS.join(", "),
  ];

  constructor() {}

  ngOnInit() {
    console.log(this.languagesArray);
  }
}
