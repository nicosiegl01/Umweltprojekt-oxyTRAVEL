import { Component, OnInit } from '@angular/core';
import {AirportCreateService} from "../http/airport-create.service";

@Component({
  selector: 'app-update-database',
  templateUrl: './update-database.component.html',
  styleUrls: ['./update-database.component.css']
})
export class UpdateDatabaseComponent implements OnInit {

  constructor(private http:AirportCreateService) { }

  ngOnInit(): void {
  }

  updateAirports(){
    this.http.pushAll();
  }

}
