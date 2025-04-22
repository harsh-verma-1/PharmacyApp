import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  name:string|null="";
  firstName:string|null="";
  lastName:string|null="";

  constructor(private activatedRouter:ActivatedRoute){}

  ngOnInit(){

    // different ways to transfer data from one page to another page

    // this method is used when the data is passed in the link
    this.name=this.activatedRouter.snapshot.paramMap.get('name');
    


    // this code is absolutely working fine there is no error in this
    // this data is coming from header component
    // passed data as parameter in the link


    // this.activatedRouter.queryParams.subscribe(params=>{
    //   this.name=params['name'];
    //   if(this.name){
    //     const [first,last]=this.name.split(" ");
    //     this.firstName=first;
    //     this.lastName=last;
    //   }
    
    // })
  }

}
