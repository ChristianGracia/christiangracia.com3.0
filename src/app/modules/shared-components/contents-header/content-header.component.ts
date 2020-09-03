import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-contents-header",
  templateUrl: "./content-header.component.html",
  styleUrls: ["./content-header.component.scss"],
})
export class ContentsHeaderComponent implements OnInit {
  @Input()
  contentTitle: string;
  @Input()
  contentDescription: string;

  constructor() {}

  ngOnInit() {}
}
