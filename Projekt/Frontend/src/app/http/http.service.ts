import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Flight} from "../interfaces/Flight.module";
import {FlightDataModule} from "../interfaces/FlightData.module";
import {MapQuestModel} from "../interfaces/MapQuest.model";
import { Airport } from '../Airport';
import {Customer} from "../interfaces/Customer.modle";

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

  //let url = "http://www.mapquestapi.com/directions/v2/route?key=yPOsANY3nbgYOult8LRSLLHkbZfjXBiP&from="+"Linz Hoersching Airport"+"&to="+"Frankfurt am Main Airport"+"&routeType="+options
  //let url = "http://www.mapquestapi.com/directions/v2/route?key=yPOsANY3nbgYOult8LRSLLHkbZfjXBiP&from="+"Linz Hoersching Airport"+"&to="+"Frankfurt am Main Airport"+"&routeType=bicycle"
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

  createUser(mail:string,password:string){
    let url = this.path + "create";
    return this.http.post(url, {
      "mail":mail,
      "password":password
    })
  }

  login(mail:string, password:string){
    let url = this.path + "login/"+mail+"/"+password
    return this.http.get(url)
  }

  findUserByMail(mail:string){
    let url = this.path + "/findByMail/"+mail
    return this.http.get<Customer>(url)

  }

  findNumOfSearchs(){
    let url = this.path + "search/count"
    return this.http.get<number>(url)
  }

  addFlightSearch(flight:string){
    let url = this.path + "search"
    return this.http.post(url,{
      "flightnumber": "FRQ123"
    })
  }
}

enum options {
  shortest="shortest",
  fastest="fastest"
}
