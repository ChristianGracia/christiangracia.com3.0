import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { GithubService } from "../../../shared-components/services/github.service";
import { Commit } from "src/app/modules/shared-components/models/commit.model";
export interface DialogData {
  repo: string;
  url: string;
}

@Component({
  selector: "app-view-commit-modal",
  templateUrl: "./view-commit-modal.component.html",
  styleUrls: ["./view-commit-modal.component.scss"],
})
export class ViewCommitModalComponent implements OnInit {
  public loadingCommits: boolean = false;
  public commits: Commit[] = [];
  public numberOfCommits: number = 30;
  public outOfCommits: boolean = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private githubService: GithubService
  ) {}

  ngOnInit() {
    this.loadCommits();
  }
  loadCommits() {
    this.loadingCommits = true;
    this.githubService
      .getAllCommitsOfRepo(this.data.repo, this.numberOfCommits)
      .subscribe((data) => {
        this.commits = data;
        this.loadingCommits = false;
        if (this.numberOfCommits !== data.length) {
          this.outOfCommits = true;
          this.numberOfCommits = data.length;
        }
      });
  }
  formatDate(date: string) {
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
  militaryTimeConverter(date: Date) {
    let hours = date.getHours();
    const AmOrPm = hours >= 12 ? "pm" : "am";
    hours = hours % 12 || 12;
    let minutes = date.getMinutes();
    let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const seconds = date.getSeconds();
    return hours + ":" + formattedMinutes + " " + AmOrPm;
  }
  seeMoreCommits() {
    this.numberOfCommits += 30;
    this.loadCommits();
  }
}
