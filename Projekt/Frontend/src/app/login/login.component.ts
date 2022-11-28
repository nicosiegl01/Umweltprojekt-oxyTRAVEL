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
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),

  });

  constructor(private router: Router,private http:HTTPService) {}

  ngOnInit(): void {}

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  submit() {
    let mail:string = ""
    mail = this.loginForm.value.email
    let pw:string = ""
    pw = this.loginForm.value.password
    this.http.findUserByMail(mail).subscribe(temp=>{
      alert(temp)
    })
  }
}
