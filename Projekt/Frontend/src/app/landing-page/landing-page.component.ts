import { Component, OnInit } from '@angular/core';
import {HTTPService} from "../http/http.service";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  counter:number = 0

  constructor(private http:HTTPService) { }

  ngOnInit(): void {
    this.http.findNumOfSearchs().subscribe(temp=>{
      console.log(temp)
      this.counter = temp
    })
  }

}
