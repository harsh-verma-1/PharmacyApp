import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-see-product-details',
  standalone: false,
  templateUrl: './see-product-details.component.html',
  styleUrl: './see-product-details.component.css'
})
export class SeeProductDetailsComponent { 

  id:any;
  product:any;

  constructor(private activatedRoute:ActivatedRoute, private router:Router, private productService:ProductService){}

  ngOnInit(){
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    this.product=this.productService.getProductById(this.id);
  }
  


  // this below code is used to route to different page
  goBackToProductPage(){
    this.router.navigate(['/products'])
  }

}
