import { Component, OnInit } from "@angular/core";
import { GithubService } from "../../../services/github.service";

@Component({
  selector: "app-github-repo",
  templateUrl: "./github-repo.component.html",
  styleUrls: ["./github-repo.component.scss"],
})
export class GithubRepoComponent implements OnInit {
  constructor(private githubService: GithubService) {}

  ngOnInit() {
    console.log(this.githubService.sayHi());
  }
}
