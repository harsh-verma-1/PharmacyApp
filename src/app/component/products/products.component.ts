import { Component } from '@angular/core';
import {IProduct} from '../../utility/IProduct';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';



@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {


  searchBy:string="";
  products:any;

  constructor(private router:Router, private productService:ProductService, private cartService:CartService){}

  
  //use to fetch the products details using the productService
  ngOnInit(){
    this.products=this.productService.getProduct();
  }



  //use to go back to the cart
  goToCart(){
    this.router.navigate(['/go-to-cart']);
  }

  pro:any;
  addToCart(value:number){
    this.pro=this.productService.getProductById(value);
    this.cartService.addToCart(this.pro);
  }


// i think it is of no use
//   product:any
//   getProduct(id:number){
//     this.product=this.productService.getProductById(id);
//   }

//   addToCart(product:any) {
//     this.cartService.addToCart(product);
//     const total = this.cartService.getCartTotal();
//     console.log('Cart total is ₹', total);
// }

}


// the below method we will use when we want to login user before going to the cart services
// goToCart() {
//   this.router.navigateByUrl('/refresh', { skipLocationChange: true }).then(() => {
//     this.router.navigate(['/go-to-cart']);
//   });
// }