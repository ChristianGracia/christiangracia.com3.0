import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-skill-card",
  templateUrl: "./skill-card.component.html",
  styleUrls: ["./skill-card.component.scss"],
})
export class SkillCardComponent implements OnInit {
  @Input() public listTitle: string;

  @Input() public listItems: string[];

  constructor() {}

  ngOnInit() {
    console.log("list item");
    console.log(this.listItems);
  }
}
