import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Flight} from "../interfaces/Flight.module";
import {FlightDataModule} from "../interfaces/FlightData.module";
import {MapQuestModel} from "../interfaces/MapQuest.model";
import { Airport } from '../interfaces/Airport';
import {Customer} from "../interfaces/Customer.modle";
import {FlightSearch} from "../interfaces/FlightSearch.model";
import {Tree} from "../interfaces/Tree.model";
import {FlightnoModel} from "../interfaces/Flightno.model";

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
    let url = "http://www.mapquestapi.com/directions/v2/route?key=yPOsANY3nbgYOult8LRSLLHkbZfjXBiP&from="+loc1+"&to="+loc2+"&routeType=fastest"//+options
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
    console.log(url)
    return this.http.post(url, {
      "mail":mail,
      "password":password
    })
  }

  login(mail:string, password:string){
    let url = this.path + "login/"+mail+"/"+password
    console.log(url)
    return this.http.get<Customer>(url)
  }

  findUserByMail(mail:string){
    let url = "http://localhost:8081/api/findByMail/"+mail
    return this.http.get<Customer>(url)

  }

  findNumOfSearchs(){
    let url = this.path + "search/count"
    return this.http.get<number>(url)
  }

  addFlightSearch(flight: FlightSearch){
    let url = this.path + "search"
    return this.http.post(url,{
      "flightnumber": "FRQ123"
    })
  }

  getSearchesByUser(mail:string){
    let url = this.path + "search/findByUser/"+mail
    return this.http.get<FlightSearch[]>(url)
  }

  getTree(){
    let url = this.path + "tree/getTree"
    return this.http.get<Tree>(url);
  }

  addFlightNumberToAccount(c:Customer,flight:string,co2:number,trees:number){
    let url = "http://localhost:8081/api/search"
    var todayDate = new Date().toISOString().slice(0, 10);
    console.log(c )
    console.log(flight)
    console.log(todayDate)
    console.log("hallo" + trees);
    return this.http.post(url,{
      "flightnumber": flight,
      "timestamp_added": todayDate,
      "co2": co2,
      "trees": trees,
      "customer": {
        "id": c.id,
        "mail": c.mail,
        "password": c.password
      }
    })
  }

  sendBase64GetFlightnumber(base64:string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    });

    //TODO: change localhost to server
    let url = "http://127.0.0.1:5000/bildl/"
    return this.http.post<FlightnoModel>(url,{
      "data": base64
    }, {headers: headers})
  }

  getFlightSearchData(mail: string){
    let url = "http://localhost:8081/api/search/findByUser/" + mail;
    console.log(url);
    return this.http.get<FlightSearch[]>(url);
  }
}

enum options {
  shortest="shortest",
  fastest="fastest"
}
