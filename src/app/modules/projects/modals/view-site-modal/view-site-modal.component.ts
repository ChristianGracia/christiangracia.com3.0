import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

export interface DialogData {
  repo: string;
  url: string;
}

@Component({
  selector: "app-view-site-modal",
  templateUrl: "./view-site-modal.component.html",
  styleUrls: ["./view-site-modal.component.scss"],
})
export class ViewSiteModalComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit() {
    console.log(this.data.url);
  }
}
