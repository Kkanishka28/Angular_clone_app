import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,FormControlName,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  loginForm= new FormGroup({
    user:new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(5)])
  })
userLogin(){
console.log(this.loginForm.value)
}
//   userLogin(item:any){
//  console.log(item)
//   }
get user(){
  return this.loginForm.get('user')
}
get password(){
  return this.loginForm.get('password')
}
}
