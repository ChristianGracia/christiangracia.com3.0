import { Component, OnInit } from "@angular/core";
import { GithubService } from "../../../shared-components/services/github.service";
import { Repo } from "../../models/github-repo.model";
import { ViewCommitModalComponent } from "../../modals/view-commit-modal/view-commit-modal.component";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

@Component({
  selector: "app-github-repo",
  templateUrl: "./github-repo.component.html",
  styleUrls: ["./github-repo.component.scss"],
})
export class GithubRepoComponent implements OnInit {
  public gitRepos: Repo[] = [];
  window: Window = window;
  constructor(private githubService: GithubService, public dialog: MatDialog) {}

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

  openRepoCommitModal(repoName: string, repoUrl: string) {
    let config = new MatDialogConfig();
    config = {
      // position: {
      //   top: "20px",

      // },
      height: "80%",
      width: "100vw",
      panelClass: "full-screen-modal",
      data: {
        repo: repoName,
        url: repoUrl,
      },
    };
    const dialogRef = this.dialog.open(ViewCommitModalComponent, config);

    dialogRef.afterClosed().subscribe((result) => {
      // console.log(`Dialog result: ${result}`);
    });
  }

  formatUpdateAtDate(date: string) {
    let formattedDate = new Date(date);

    return (
      this.militaryTimeConverter(formattedDate) +
      " " +
      formattedDate.toLocaleDateString("en-US")
    );
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
    const AmOrPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    let minutes = date.getMinutes();
    let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const seconds = date.getSeconds();
    return hours + ":" + formattedMinutes + " " + AmOrPm;
  }
}
