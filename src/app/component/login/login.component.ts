import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService} from '../../services/login-service.service';
import { login } from '../../utility/login';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  alertMessage:String="";

  constructor(private router:Router, private loginService:LoginService, private sharedService:SharedService){}

  loginForm=new FormGroup({
    // userName:new FormControl('',[Validators.required,Validators.minLength(5)]),
    pass:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])
  })

  
  login(){
    
const user: login = {
      //  userName: this.loginForm.get('userName')?.value || '',
       pass: this.loginForm.get('pass')?.value || '',
       email: this.loginForm.get('email')?.value || ''
    };
  
    this.loginService.login(user).subscribe({
      next:(data)=>{

        //'user' is used as a name to define a place in the local storage
        sessionStorage.setItem('user',JSON.stringify(data));
        
        // trying to get data from backend and set it to the shared service to profile
        // this.userName=data.name;
        // this.sharedService.setUserName()
        this.router.navigate(['/home']);

        this.loginForm.reset();
        console.log("user logged in");
      },
      error:(error)=>{
        this.alertMessage="UserName or Password Incorrect";
        console.log("User not logged in");
        
      }
  });
    // this.router.navigate(['/profile'],{queryParams:{name:'Harsh'}})
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
