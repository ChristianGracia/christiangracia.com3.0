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
      formattedDate.getMonth() +
      1 +
      "-" +
      formattedDate.getDate() +
      "-" +
      formattedDate.getFullYear();

    return this.militaryTimeConverter(formattedDate) + " " + returnDate;
  }
  formatRepoLanguage(language: string) {
    let color = "";

    switch (language) {
      case "Ruby":
        color = "red";
        break;
      case "Java":
        color = "#B07219";
        break;
      case "JavaScript":
        color = "#F0D91D";
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
      case "Python":
        color = "green";
        break;

      default:
        color = "black";
        break;
    }
    return color;
  }
  militaryTimeConverter(date: Date) {
    let hours = date.getHours();
    const AmOrPm = hours >= 12 ? "pm" : "am";
    hours = hours % 12 || 12;
    let minutes = date.getMinutes();
    let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const seconds = date.getSeconds();
    return hours + ":" + formattedMinutes + " " + AmOrPm;
  }
}
