import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LocationData } from "../models/location-data.model";

@Injectable({
  providedIn: "root",
})
export class LocationService {
  constructor(private http: HttpClient) {}

  public getLocationData() {
    return this.http.get<LocationData>("http://ip-api.com/json");
  }
}
