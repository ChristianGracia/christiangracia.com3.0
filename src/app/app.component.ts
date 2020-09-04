import { Component } from "@angular/core";
import { MatIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "christian-gracia-site";

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      "linkedin",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "../assets/images/linkedin.svg"
      )
    );
    this.matIconRegistry.addSvgIcon(
      "twitter",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "../assets/images/twitter.svg"
      )
    );
    this.matIconRegistry.addSvgIcon(
      "github",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "../assets/images/github.svg"
      )
    );

    this.matIconRegistry.addSvgIcon(
      "search",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "../assets/images/search.svg"
      )
    );

    // this.matIconRegistry.addSvgIcon(
    //   "menu",
    //   this.domSanitizer.bypassSecurityTrustResourceUrl(
    //     "../assets/images/menu.svg"
    //   )
    // );

    // this.matIconRegistry.addSvgIcon(
    //   "bookmark",
    //   this.domSanitizer.bypassSecurityTrustResourceUrl(
    //     "../assets/images/bookmark.svg"
    //   )
    // );

    // this.matIconRegistry.addSvgIcon(
    //   "chevron",
    //   this.domSanitizer.bypassSecurityTrustResourceUrl(
    //     "../assets/images/chevron.svg"
    //   )
    // );
  }
}
