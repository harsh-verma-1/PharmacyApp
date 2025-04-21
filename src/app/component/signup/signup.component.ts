import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  signUpForm = new FormGroup({
    Name:new FormControl('',[Validators.required,Validators.minLength(5)]),
    pass:new FormControl('',Validators.required),
    Email:new FormControl('',Validators.required)
  })


  signUp(){
    alert('User Registered Succesfully')
  }
}
