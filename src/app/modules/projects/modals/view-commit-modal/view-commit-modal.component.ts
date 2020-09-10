import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
export interface DialogData {
  repo: string;
}

@Component({
  selector: "app-view-commit-modal",
  templateUrl: "./view-commit-modal.component.html",
  styleUrls: ["./view-commit-modal.component.scss"],
})
export class ViewCommitModalComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit() {}
}
