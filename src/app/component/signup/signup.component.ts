import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../../services/signup.service';
import { signUp } from '../../utility/signUp';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(private singupService:SignupService){}


  signUpForm = new FormGroup({
    Name:new FormControl('',[Validators.required,Validators.minLength(5)]),
    pass:new FormControl('',Validators.required),
    Email:new FormControl('',Validators.required)
  })


  signUp(){

    const userInfo= {
           name: this.signUpForm.value.Name!,
           password: this.signUpForm.value.pass!,
           email: this.signUpForm.value.Email!,
           role:'User',
        };
    
    this.singupService.postUser(userInfo).subscribe({
      next:(data:signUp)=>{
        if(data){
          console.log("user registered");
          alert("User Registered Successfully")
        }
      },
      error:(error)=>{
        if(error.status===500 || error.error.message==="User Already Present"){
          
          alert("User Already Present. Please use another email")
          console.log("Error occured",error.error.message);
        }else{
          console.log("Error Occured",error);
          
          alert("An error occurred during registration. Please try again later.");
        }
      }  
    });
  }
}
