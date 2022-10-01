import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HTTPService} from "../http/http.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  constructor(private http:HTTPService) { }

  ngOnInit(): void {

  }

  getFlight(){
    this.http.getFlightData("").subscribe(temp=>{
      console.error('Flug:')
      console.log(temp.response.arr_name)
    })
  }

}
