import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { GithubService } from "../../../shared-components/services/github.service";
import { Commit } from "src/app/modules/shared-components/models/commit.model";
import { formatDateAndTime } from "src/app/util/dateMethods";
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
  public numberOfCommits: number = 100;
  public outOfCommits: boolean = false;
  // public length: number = 0;
  // public pageSize: number = 0;

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
        console.log(data);
        this.commits = data;
        this.loadingCommits = false;
        // this.length = data.length;
        // if (this.numberOfCommits !== data.length) {
        //   this.outOfCommits = true;
        //   this.numberOfCommits = data.length;
        // }
      });
  }
  formatDate(date: string) {
    return formatDateAndTime(date);
  }
  // seeMoreCommits() {
  //   this.numberOfCommits += 30;
  //   this.loadCommits();
  // }
}
