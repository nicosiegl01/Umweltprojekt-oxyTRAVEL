import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {HTTPService} from "../http/http.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  addressForm = this.fb.group({
    mail: [null, [Validators.required, Validators.email]],
    password: [null, Validators.required],
  });

  hasUnitNumber = false;


  constructor(private fb: FormBuilder,private http:HTTPService, private router:Router) {}

  onSubmit(): void {
    let mail:string = ""
    mail = this.addressForm.value.mail
    let pw:string = ""
    pw = this.addressForm.value.password
    console.log(mail + " " + pw)
    this.http.createUser(mail,pw).subscribe(temp=>{
      this.router.navigate(["login"])
    })
  }
}
