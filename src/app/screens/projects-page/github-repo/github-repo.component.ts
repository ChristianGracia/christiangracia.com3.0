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
}
