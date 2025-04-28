import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class UsertypeService {

  userName:string="";
  role:string="";
  menuType:string='default';


  constructor(private router:Router, private sharedService:SharedService) { }


  loadLocalStorage(){
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

  menuKaType(){

    return this.menuType;
    
  }
}