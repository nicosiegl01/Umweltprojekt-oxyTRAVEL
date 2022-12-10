import { Component, Input, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HTTPService} from "../http/http.service";
import { stringify } from 'querystring';
import { Airport } from '../Airport';

@Component({
  selector: 'app-main',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  departureStation:string = ""
  departureCountry:string = ""
  arrivalStation:string = ""
  arrivalCountry:string = ""
  status:string = ""
  arrTime_utc:string = ""
  deptTime_utc:string = ""
  arrTime:string = ""
  deptTime:string = ""
  timeDiff:number = 0;
  timeDiffStr:string = "";
  dep_city:string = ""
  arr_city:string = ""
  aiport:string = "";
  airport1: string = ""
  airportArray: Airport[] = [];
  arr_iaco:string = "";
  dep_iaco:string = "";

  durationCar:string = ""   //hh:mm:ss
  wegAuto!:number         //in kilometer
  fuelUsed!:number        //einheit unklar

  durationBicycle!:string
  wegBicycle!:number;

  distance!: number;

  inputText: any = "";

  constructor(private http:HTTPService/*, private http2:AirportCreateService*/) {}

  ngOnInit(): void {
    /*this.http.getAirportByName(this.aiport, this.airport1).subscribe(temp => {
      let airports = temp;
      console.log(airports);
    })*/
  }

  getFlightWithNumber(){
    this.getFlight(this.inputText);
  }

  getFlight(flightnumber: any){
    this.http.getFlightData(flightnumber).subscribe(temp=>{
      console.error('Flug:')
      console.log(temp)
      this.departureCountry = temp.response.dep_country
      this.arrivalCountry = temp.response.arr_country
      this.departureStation = temp.response.dep_name
      this.arrivalStation = temp.response.arr_name
      this.status = temp.response.status
      this.arrTime_utc = temp.response.arr_time_utc
      this.deptTime_utc = temp.response.dep_time_utc
      this.arrTime = temp.response.arr_time
      this.deptTime = temp.response.dep_time
      this.dep_city = temp.response.dep_city
      this.arr_city = temp.response.arr_city
      this.arr_iaco = temp.response.arr_icao
      this.dep_iaco = temp.response.dep_icao
      console.log(this.departureStation);
      this.http.getCarRoute(this.dep_city,this.arr_city,options.shortest).subscribe(temp2=>{
        this.durationCar = temp2.route.formattedTime
        this.fuelUsed = temp2.route.fuelUsed
        this.wegAuto = temp2.route.distance * 1,609344
      })

      this.http.getBicycleRoute(this.dep_city,this.arr_city).subscribe(temp3=>{
        this.wegBicycle = temp3.route.distance * 1,609344
        this.durationBicycle = temp3.route.formattedTime
      })

      this.http.getAirportByName(this.dep_iaco, this.arr_iaco).subscribe(airport1 => {
        this.airportArray = airport1;
        console.log(this.dep_iaco, this.arr_iaco);
        console.log(this.airportArray[0].latitude);
        console.log(this.airportArray[0].longitude);
        console.log(this.airportArray[1].latitude);
        console.log(this.airportArray[1].longitude);
        this.getTimeDifference();
      });   
    })
  }

  getTimeDifference(){
    //this.deptTime_utc - this.arrTime_utc
    const date1 = new Date(this.arrTime_utc);
    const date2 = new Date(this.deptTime_utc);
    const msBetweenDates = date2.getTime() - date1.getTime();
    let timeHours = ((msBetweenDates/1000)/60)/60
    timeHours = Math.abs(timeHours)
    var hrs = parseInt(String(Number(timeHours)));
    var min = Math.round((Number(timeHours)-hrs) * 60);
    var clocktime = hrs+' Hours '+min+' Minutes';
    this.timeDiffStr = clocktime;
    console.log(this.airport1);
    this.getDistance(this.airportArray[0].latitude, this.airportArray[0].longitude, this.airportArray[1].latitude, this.airportArray[1].longitude);
    this.getEmissions();
  }

  getDistance(xBreitengrad: number, xLaengengrad: number, yBreitengrad: number, yLaengengrad: number){
    // var Luftlinie = 6.378,137 • (z)
    // var z =  sin(xA) • sin(xB)  +  cos(xA) • cos(xB) • cos(yB - yA)
    // 50 = breitengrad Frankfurt / 48
    // 8.58 = Längengrad Frankfurt / 14
    // -33.94 = Breitengrad Sydney / -46
    // 151.175 = Längengrad Sydney /168
    this.distance = 6371 * Math.acos(Math.sin(this.toDegree(xBreitengrad)) * Math.sin(this.toDegree(yBreitengrad)) + Math.cos(this.toDegree(xBreitengrad)) * Math.cos(this.toDegree(yBreitengrad)) * Math.cos(this.toDegree(yLaengengrad) - this.toDegree(xLaengengrad))) * Math.PI/this.toDegree(180); 
    console.log(this.distance);
  }

  toDegree(radians: number ){
    return radians * (Math.PI / 180);
  }

  getEmissions(){
    let emissions = (this.distance / 100) * 3.58;
    emissions = Math.floor(emissions);
    console.log(emissions + " Liter");
  }
}

enum options {
  shortest="shortest",
  fastest="fastest"
}
