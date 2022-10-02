import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Flight} from "../interfaces/Flight.module";
import {FlightDataModule} from "../interfaces/FlightData.module";
import {MapQuestModel} from "../interfaces/MapQuest.model";

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

  getCarRoute(loc1:string, loc2:string, options:options){
    let url = "http://www.mapquestapi.com/directions/v2/route?key=yPOsANY3nbgYOult8LRSLLHkbZfjXBiP&from="+loc1+"&to="+loc2+"&routeType="+options
    return this.http.get<MapQuestModel>(url)
  }

  getBicycleRoute(loc1:string, loc2:string){
    let url = "http://www.mapquestapi.com/directions/v2/route?key=yPOsANY3nbgYOult8LRSLLHkbZfjXBiP&from="+loc1+"&to="+loc2+"&routeType=bicycle"
    return this.http.get<MapQuestModel>(url)
  }
}

enum options {
  shortest="shortest",
  fastest="fastest"
}
