import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { map } from "rxjs/operators";
import { Repo } from "../../projects/models/github-repo.model";

@Injectable({
  providedIn: "root",
})
export class GithubService {
  constructor(private http: HttpClient) {}

  public getAllRepos() {
    return this.http.get<Repo[]>(environment.apiUrl + "/github/all-repos").pipe(
      map((data: Repo[]) => {
        return data;
      })
    );
  }

  public getAllCommitsOfRepo(repoName: string, numberOfCommits: number) {
    return this.http
      .get<any[]>(environment.apiUrl + "/github/repo-all-commits")
      .pipe(
        map((data: any[]) => {
          return data;
          console.log(data);
        })
      );
  }
}
