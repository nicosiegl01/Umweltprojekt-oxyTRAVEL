import { Component, OnInit } from '@angular/core';
import { HTTPService } from '../http/http.service';
import { Customer } from '../interfaces/Customer.modle';
import { FlightSearch } from '../interfaces/FlightSearch.model';
import { Chart, registerables } from 'chart.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.css']
})
export class DiagramComponent implements OnInit{

  user!:Customer
  flightSearch: FlightSearch[] = [];
  public chart:any;

  constructor(private http: HTTPService, private route: Router){
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("my_user")!)
    this.http.getSearchesByUser(this.user.mail).subscribe(temp => {
      this.flightSearch = temp;
    });
    console.log(this.flightSearch);
    this.http.getFlightSearchData(this.user.mail).subscribe(data => {
      this.flightSearch = data; 
    
      let co2: any[] = [];
      let trees: any[] = [];
      let labels: any[] = [];
    
      this.flightSearch.forEach((flight, index) => {
        co2.push(flight.co2);
        trees.push(flight.trees);
        console.log(co2);
        console.log(trees);
        labels.push(`Flug ${index + 1}`);
      });
    
      this.chart = new Chart("MyChart", {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Co2",
              data: co2,
              backgroundColor: 'rgb(255, 99, 132)',
            },
            {
              label: "Bäume",
              data: trees,
              backgroundColor: 'rgb(54, 162, 235)',
            }
          ]
        },
        options: {
          aspectRatio: 2.5,
        }
      });
    }
  )}

  back(){
    return this.route.navigate([""]);
  }
}
