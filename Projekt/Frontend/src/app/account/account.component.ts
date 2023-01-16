import { Component, OnInit } from '@angular/core';
import {HTTPService} from "../http/http.service";
import {Customer} from "../interfaces/Customer.modle";
import {FlightSearch} from "../interfaces/FlightSearch.model";

class User {
}

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
user!:Customer
  searches:FlightSearch[] = []
  constructor(private http:HTTPService) { }

  ngOnInit(): void {
    let user: Customer = JSON.parse(localStorage.getItem("my_user")!)
    this.user = JSON.parse(localStorage.getItem("my_user")!)
    if(user!=null){
      this.http.getSearchesByUser(this.user.mail).subscribe(temp=>{
        this.searches = temp
      })
    }
  }

}
