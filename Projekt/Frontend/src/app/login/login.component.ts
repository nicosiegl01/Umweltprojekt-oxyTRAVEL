import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {HTTPService} from "../http/http.service";

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
    this.http.login(mail,pw).subscribe(temp=>{
      console.log(temp)
      if(temp != null){
        this.router.navigate(['/'])
      }
    })
  }
}
