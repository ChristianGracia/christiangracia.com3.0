import { Component, OnInit } from "@angular/core";
import { GithubService } from "../../../services/github.service";
import { Repo } from "src/app/models";

@Component({
  selector: "app-github-repo",
  templateUrl: "./github-repo.component.html",
  styleUrls: ["./github-repo.component.scss"],
})
export class GithubRepoComponent implements OnInit {
  public gitRepos: Repo[] = [];
  window: Window = window;
  constructor(private githubService: GithubService) {}

  ngOnInit() {
    this.getGithubRepos();
  }

  getGithubRepos() {
    this.githubService
      .getAllRepos()
      .subscribe((repos: Repo[]) => (this.gitRepos = repos));
  }

  openLink(url: string) {
    window.open(url, "_blank");
  }
  formatUpdateAtDate(date: string) {
    let formattedDate = new Date(date);
    let returnDate =
      formattedDate.getFullYear() +
      "-" +
      (formattedDate.getMonth() + 1) +
      "-" +
      formattedDate.getDate();

    return returnDate + " " + this.militaryTimeConverter(formattedDate);
  }
  formatRepoLanguage(language: string) {
    let color = "";

    switch (language) {
      case "Ruby":
        color = "red";
        // symbol = "fas fa-gem ml-2";
        break;
      case "Java":
        color = "#B07219";
        // symbol = "fab fa-java ml-2";
        break;
      case "JavaScript":
        color = "#F0D91D";
        // symbol = "fab fa-js-square ml-2";
        break;
      case "TypeScript":
        color = "#61D2F8";
        break;
      case "C#":
        color = "green";
        break;
      case "C":
        color = "black";
        break;

      default:
        color = "black";
        break;
    }
    return color;
  }
  militaryTimeConverter(date: Date) {
    const hours = date.getHours(); // gives the value in 24 hours format
    const AmOrPm = hours >= 12 ? "pm" : "am";
    hours = hours % 12 || 12;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return hours + ":" + minutes + " " + AmOrPm;
  }
}
