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
  public displayedCommits: Commit[] = [];
  public numberOfCommits: number = 1000;
  public outOfCommits: boolean = false;
  public totalCommits: number;
  public page = 0;
  public size = 25;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private githubService: GithubService
  ) {}

  ngOnInit() {
    this.loadCommits();
  }

  public formatDate(date: string) {
    return formatDateAndTime(date);
  }

  public getData(obj) {
    let index = 0,
      startingIndex = obj.pageIndex * obj.pageSize,
      endingIndex = startingIndex + obj.pageSize;

    this.displayedCommits = this.commits.filter(() => {
      index++;
      return index > startingIndex && index <= endingIndex ? true : false;
    });
  }

  public openSite(url: string) {
    window.open(url, "_blank");
  }

  private loadCommits() {
    this.loadingCommits = true;
    this.githubService
      .getAllCommitsOfRepo(this.data.repo, this.numberOfCommits)
      .subscribe((data) => {
        this.commits = data;
        this.loadingCommits = false;
        this.totalCommits = data.length;
        this.getData({ pageIndex: this.page, pageSize: this.size });
      });
  }
}
