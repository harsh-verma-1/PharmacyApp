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
    this.router.events.subscribe((val:any)=>{
      if(val?.url){
        if(typeof sessionStorage !== 'undefined')
        if(sessionStorage?.getItem('user')){
          let userStore = sessionStorage.getItem('user');
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
    sessionStorage.removeItem('cart');
    sessionStorage.removeItem('user');
    this.menuType='default';
    this.router.navigate(['/home',{menuType:'default'}]);
  }


}
