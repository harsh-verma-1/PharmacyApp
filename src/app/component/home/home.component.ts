import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Drug } from '../../utility/Drug';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  product:Drug[]=[];
  userType:string='default';


  constructor(private api:ApiService,private router:Router){}
  
  ngOnInit(){
    this.getDrug();
    this.user();
  }

  getDrug(){
    this.api.getProductList().subscribe({
      next: (data) => {
        this.product = data;
      },
      error: (error) => {
        this.product = [];
        console.log('Error occured while fetching data', error);
      }
    });
    }

     
    // delete the drug from database
    deleteDrug(id:number){
      this.api.deleteDrug(id).subscribe((data:Drug)=>{
      this.getDrug();
      });
    }



    user(){
      if(typeof localStorage !=='undefined')
      if(localStorage?.getItem('user')){
        let userStore = localStorage.getItem('user');
        let userData = userStore && JSON.parse(userStore);
        if(userData.role==='Admin'){
          this.userType='Admin';
        }
        else{
          this.userType='default';
        }
      }
      else{
        this.userType='default';
      }
    }
}