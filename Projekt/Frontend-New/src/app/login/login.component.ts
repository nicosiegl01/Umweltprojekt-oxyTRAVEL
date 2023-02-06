import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {HTTPService} from "../http/http.service";
import {Customer} from "../interfaces/Customer.modle";
// @ts-ignore
import * as bcrypt from "bcryptjs";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  mail:string = '';
  password:string = '';
  counter:number = 0

  constructor(private router: Router,private http:HTTPService) {}

  ngOnInit(): void {
  }

  submit() {
    let mail:string = ""
    mail = this.mail
    let pw:string = ""
    pw = this.password
    console.log(this.password)
    this.http.findUserByMail(mail).subscribe(temp=>{
      console.log(temp)

      let x = bcrypt.compareSync(this.password,temp.password)
      console.log(temp)
      console.log(x)
      if(!x){
        console.log(temp)
        //if(temp != null){
          this.router.navigate(['/'])
        //}
        localStorage.setItem("my_user", JSON.stringify(temp))
        let user: Customer = JSON.parse(localStorage.getItem("my_user")!)
        console.log(JSON.stringify(user))
      }
    })
  }
}
