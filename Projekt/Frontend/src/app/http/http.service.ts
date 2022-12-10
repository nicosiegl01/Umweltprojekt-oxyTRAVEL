import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Flight} from "../interfaces/Flight.module";
import {FlightDataModule} from "../interfaces/FlightData.module";
import {MapQuestModel} from "../interfaces/MapQuest.model";
import { Airport } from '../Airport';

@Injectable({
  providedIn: 'root'
})
export class HTTPService {
  url:string = ""
  path:string = "http://localhost:8081/api/"

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

  getAirport(Flightnumber: number){
    let url = "airport/findAirportsByName/";
    return this.http.get<Airport>(url);
  }

  getAirportByName(airport: string, airport1: string){
    let url = "airport/findAirportsByName/";
    return this.http.get<Airport[]>(this.path + url + airport + "/" + airport1);
  }
}

enum options {
  shortest="shortest",
  fastest="fastest"
}
