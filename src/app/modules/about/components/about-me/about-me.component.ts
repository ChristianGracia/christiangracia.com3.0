import { Component, OnInit } from "@angular/core";
import { RoutingService } from "../../../../services/routing.service";

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
  "ASP.NET",
  "Java Web Apps",
];

const BACKEND_SKILLS = [
  "RESTful API Design",
  "NodeJS",
  "Spring Boot",
  "Ruby on Rails",
  "GraphQL",
  "AWS",
  ".NET Core",
  ".NET",
  "SOAP",
  "JSON/XML",
];

@Component({
  selector: "app-about-me",
  templateUrl: "./about-me.component.html",
  styleUrls: ["./about-me.component.scss"],
})
export class AboutMeComponent implements OnInit {
  public languagesArray: string[] = [LANGUAGES.join(", ")];
  public frontEndArray: string[] = [FRONTEND_SKILLS.join(", ")];
  public backEndArray: string[] = [BACKEND_SKILLS.join(", ")];

  constructor(private routingService: RoutingService) {}

  ngOnInit() {}
  goToProjectsPage() {
    this.routingService.navigateToProjects();
  }
}
