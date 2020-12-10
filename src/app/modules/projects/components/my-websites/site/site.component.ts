import { Component, OnInit, Input } from "@angular/core";
import { Site } from "../../../models/site.model";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { ViewSiteModalComponent } from "../../../modals/view-site-modal/view-site-modal.component";

@Component({
  selector: "app-site",
  templateUrl: "./site.component.html",
  styleUrls: ["./site.component.scss"],
})
export class SiteComponent implements OnInit {
  @Input() public site: Site;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  viewSite() {
    let config = new MatDialogConfig();
    config = {
      height: "100vh",
      width: "100vw",
      panelClass: "full-screen-modal",
      data: {
        // repo: repoName,
        // url: repoUrl,
      },
    };
    const dialogRef = this.dialog.open(ViewSiteModalComponent, config);

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
