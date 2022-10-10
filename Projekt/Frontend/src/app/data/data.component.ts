import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HTTPService} from "../http/http.service";
import {AirportCreateService} from "../http/airport-create.service";

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

  durationCar:string = ""   //hh:mm:ss
  wegAuto!:number         //in kilometer
  fuelUsed!:number        //einheit unklar

  durationBicycle!:string
  wegBicycle!:number

  constructor(private http:HTTPService, private http2:AirportCreateService) { }

  ngOnInit(): void {
    this.http2.pushAll()

  }

  getFlight(){
    this.http.getFlightData("JU311").subscribe(temp=>{
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
      this.getTimeDifference()

      this.http.getCarRoute(this.dep_city,this.arr_city,options.shortest).subscribe(temp2=>{
        this.durationCar = temp2.route.formattedTime
        this.fuelUsed = temp2.route.fuelUsed
        this.wegAuto = temp2.route.distance * 1,609344
      })
      this.http.getBicycleRoute(this.dep_city,this.arr_city).subscribe(temp3=>{
        this.wegBicycle = temp3.route.distance * 1,609344
        this.durationBicycle = temp3.route.formattedTime
      })
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
    this.timeDiffStr = clocktime
  }

}
enum options {
  shortest="shortest",
  fastest="fastest"
}
