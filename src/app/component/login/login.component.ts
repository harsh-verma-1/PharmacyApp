import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router:Router){}

  loginForm=new FormGroup({
    userName:new FormControl('',[Validators.required,Validators.minLength(5)]),
    pass:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])
  })

  login(){
    console.log(this.loginForm.value)
  }


  // want to set default value then only use it
  // setValue(){
  //   this.loginForm.setValue({
  //     userName:"Harsh",
  //     pass:'12345'
  //   })
  // }


  forgotPassword(){
    this.router.navigate(["/forgetpassword"]);
  }
}
