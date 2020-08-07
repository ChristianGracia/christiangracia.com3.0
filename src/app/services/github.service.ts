import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class GithubService {
  constructor(private http: HttpClient) {}

  public sayHi() {
    let herokuOrLocalCheck = false;
    let id = "";
    let secret = "";

    (window as any).process = {
      env: { DEBUG: undefined },
    };

    if (process.env.githubSecret) {
      herokuOrLocalCheck = true;
      id = process.env.githubId;
      secret = process.env.githubSecret;
    } else {
      const info = require("../../keys/github");
      id = info.githubId;
      secret = info.githubSecret;
    }

    // const id = environment.githubSeret.id;

    // const secret = environment.githubSeret.secret;

    const URL = `https://api.github.com/users/ChristianGracia/repos?per_page=10&sort=createdasc&client_id=${id}&client_secret=${secret}`;

    this.http.get(URL).subscribe((data) => console.log(data));

    // const data = await fetch(URL);
    // const dataJSON = await data.json();
    // setGithubData(dataJSON);
    // console.log(dataJSON);
    return "hi";
  }
}
