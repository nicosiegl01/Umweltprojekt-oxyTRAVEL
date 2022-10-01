import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Flight} from "../interfaces/Flight.module";
import {FlightDataModule} from "../interfaces/FlightData.module";

@Injectable({
  providedIn: 'root'
})
export class HTTPService {
  url:string = ""

  constructor(private http: HttpClient) { }

  getFlightData(flight:string){
    let url = "https://airlabs.co/api/v9/flight?flight_iata="+flight+"&api_key=84b4758a-e16a-479b-98de-4f2f48bf720c"
    return this.http.get<FlightDataModule>(url)
  }
}
