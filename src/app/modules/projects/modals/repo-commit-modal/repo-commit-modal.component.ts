import {
  Component,
  OnInit,
  Inject,
  AfterViewInit,
  ViewChild,
} from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { GithubService } from "../../../shared-components/services/github.service";
import { Commit } from "src/app/modules/shared-components/models/commit.model";
import { formatDateAndTime } from "src/app/util/dateMethods";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
export interface DialogData {
  repo: string;
  url: string;
}

@Component({
  selector: "app-repo-commit-modal",
  templateUrl: "./repo-commit-modal.component.html",
  styleUrls: ["./repo-commit-modal.component.scss"],
})
export class RepoCommitModalComponent implements OnInit {
  public loadingCommits: boolean = false;
  public commits: Commit[] = [];
  public displayedCommits: Commit[] = [];
  public numberOfCommits: number = 1000;
  public outOfCommits: boolean = false;
  public totalCommits: number;
  public page = 0;
  public size = 25;

  displayedColumns: string[] = ["message", "time", "url"];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

  dataSource;
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
        this.dataSource = new MatTableDataSource<any>(
          data.map((item) => ({
            message: item.message,
            time: item.time,
            url: item.url,
          }))
        );
        this.dataSource.paginator = this.paginator;
        this.commits = data;
        this.loadingCommits = false;
        this.totalCommits = data.length;
        this.getData({ pageIndex: this.page, pageSize: this.size });
      });
  }
}
