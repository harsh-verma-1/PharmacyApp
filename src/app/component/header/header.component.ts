import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title:string="Pharmacy Management";
  userName:string="";
  menuType:string='default';
  role:string="";

  constructor(private router:Router,private sharedService:SharedService){}

  ngOnInit(){
    this.login()
  }

  login(){
    this.router.events.subscribe((val:any)=>{
      if(val?.url){
        if(typeof localStorage !== 'undefined')
        if(localStorage?.getItem('user')){
          let userStore = localStorage.getItem('user');
          let userData = userStore && JSON.parse(userStore);
          this.userName = userData.name;
          this.role=userData.role;
          
          // used to set data to the shared service
          this.sharedService.setUserName(this.userName);

          
          if(this.role==='User'){
            this.menuType = 'User';
          }
          else{
            this.menuType='Admin';
          }
        }
        else{
          this.menuType='default';
        }
      }
    })    
  }
  logout(){
    localStorage.removeItem('cart');
    localStorage.removeItem('user');
    this.menuType='default';
    this.login();
    this.router.navigate(['/login'])
  }

}
