import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HTTPService} from "../http/http.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
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

  constructor(private http:HTTPService) { }

  ngOnInit(): void {

  }

  getFlight(){
    this.http.getFlightData("AF762").subscribe(temp=>{
      console.error('Flug:')
      console.log(temp.response.arr_name)
      this.departureCountry = temp.response.dep_country
      this.arrivalCountry = temp.response.arr_country
      this.departureStation = temp.response.dep_name
      this.arrivalStation = temp.response.arr_name
      this.status = temp.response.status
      this.arrTime_utc = temp.response.arr_time_utc
      this.deptTime_utc = temp.response.dep_time_utc
      this.arrTime = temp.response.arr_time
      this.deptTime = temp.response.dep_time
      this.getTimeDifference()
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
    console.log(timeHours)
    console.log(clocktime)
    this.timeDiffStr = clocktime
  }

}
