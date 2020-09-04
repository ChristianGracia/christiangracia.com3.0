import { Component, OnInit } from "@angular/core";

const LANGUAGES = [
  "JavaScript",
  "Java",
  "Python",
  "C#",
  "Ruby",
  "Swift",
  "C",
  "Objective-C",
  "TypeScript",
  "HTML/CSS + Sass",
];

const FRONTEND_SKILLS = [
  "React",
  "Angular",
  "React Native",
  "Mobile iOS/Android",
  "Bootstrap",
  "Material Design",
  "Vue.js",
  "Tailwind CSS",
  "ASP.NET Web apps",
  "Java Web apps",
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
  "RESTful API Design",
  "NodeJS",
  "Spring Boot",
  "Ruby on Rails",
  "GraphQL",
  "AWS Serverless APIs",
  ".NET Core",
  ".NET",
  "SOAP",
  "JSON and XML APIs",
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
  public frontEndArray: string[] = [FRONTEND_SKILLS.join(", ")];
  // public skillsArray: string[] = [SKILLS.join(", ")];
  public backEndArray: string[] = [BACKEND_SKILLS.join(", ")];

  constructor() {}

  ngOnInit() {
    console.log(this.languagesArray);
  }
}
