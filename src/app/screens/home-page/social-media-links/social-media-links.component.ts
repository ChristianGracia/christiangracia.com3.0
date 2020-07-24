import { Component, OnInit } from "@angular/core";

const SOCIAL_MEDIA_LINKS = ["github", "twitter", "linkedin"];

@Component({
  selector: "app-social-media-links",
  templateUrl: "./social-media-links.component.html",
  styleUrls: ["./social-media-links.component.scss"],
})
export class SocialMediaLinksComponent implements OnInit {
  socialMediaLinks: string[] = SOCIAL_MEDIA_LINKS;
  window: Window = window;
  constructor() {}

  ngOnInit() {}

  openLink(socialMedia: string) {
    let url = "";
    switch (socialMedia) {
      case "github":
        url = "https://github.com/ChristianGracia";
        break;
      case "twitter":
        url = "http://www.twitter.com/CG_CODING";
        break;
      case "linkedin":
        url = "https://www.linkedin.com/in/christiangracia";
        break;
      default:
        break;
    }
    window.open(url, "_blank");
  }
}
