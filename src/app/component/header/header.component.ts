import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title:String="Pharmacy Management";


  constructor(private router:Router){}

  // goToProfilePage(){
  //   this.router.navigate(['/profile'],{queryParams:{name:'Harsh Verma'}})
  // }
}
