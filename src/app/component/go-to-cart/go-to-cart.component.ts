// import { Component } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ProductService } from '../../services/product.service';
// import { CartService } from '../../services/cart.service';

// @Component({
//   selector: 'app-go-to-cart',
//   standalone: false,
//   templateUrl: './go-to-cart.component.html',
//   styleUrl: './go-to-cart.component.css'
// })
// export class GoToCartComponent {

//   id:any;
//   product:any;
//   sum:any;

//   constructor(private router:Router,private cartService:CartService, private activatedRoute:ActivatedRoute, private productService:ProductService){}
  
//   ngOnInit(){
//     this.id=Number(this.activatedRoute.snapshot.paramMap.get('id'));
//     this.product=this.productService.getProductById(this.id);

//     // i have to check
//     this.sum=this.cartService.getCartTotal;
//   }


//   goBackToProductPage(){
//     this.router.navigate(['/products'])
//   }
// }



// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { CartService } from '../../services/cart.service';
// import { IProduct } from '../../utility/IProduct';

// @Component({
//   selector: 'app-go-to-cart',
//   templateUrl: './go-to-cart.component.html',
//   styleUrls: ['./go-to-cart.component.css']
// })
// export class GoToCartComponent {

//   cartItems: IProduct[] = [];
//   sum: number = 0;

//   constructor(private router: Router, private cartService: CartService) {}

//   ngOnInit(): void {
//     this.cartItems = this.cartService.getCartItems();
//     this.sum = this.cartService.getCartTotal();
//   }

//   goBackToProductPage(): void {
//     this.router.navigate(['/products']);
//   }
// }



// import { CommonModule, NgIf } from '@angular/common'; // ✅ import this
// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { CartService } from '../../services/cart.service';
// import { IProduct } from '../../utility/IProduct';

// @Component({
//   selector: 'app-go-to-cart',
//   standalone: true, // ✅ make this true
//   templateUrl: './go-to-cart.component.html',
//   styleUrls: ['./go-to-cart.component.css'],
//   imports: [CommonModule] // ✅ this line is important!
// })
// export class GoToCartComponent {
//   cartItems: IProduct[] = [];
//   total: number = 0;


//   constructor(private cartService: CartService, private router: Router) {}

//   ngOnInit() {
//     this.cartItems = this.cartService.getCartItems();
//     this.total = this.cartService.getCartTotal();
//   }

//   goBackToProductPage() {
//     this.router.navigate(['/products']);
//   }

//   removeItem(id:number){
//     this.cartService.removeFromCart(id);
//     this.cartItems=this.cartService.getCartItems();
//     this.total = this.cartService.getCartTotal();
//   }


//   totalProduct:number=1;

//   increaseTotalPriceWithItemCount(id:number){
//     if(this.totalProduct>0){
//       this.totalProduct=this.totalProduct+1;
//       // this.total=this.cartService.increaseCartPrice(id);
//     }
//   }

//   decreaseTotalPriceWithItemCount(id:number){
//     if(this.totalProduct>1){
//       this.totalProduct=this.totalProduct-1;
//     }
//   }
// }


// the just above code is working fine
// ==========================================================================












import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { IProduct } from '../../utility/IProduct';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-go-to-cart',
  standalone: true, // 👈 should be true if using standalone
  imports: [CommonModule], // 👈 required for *ngIf, *ngFor
  templateUrl: './go-to-cart.component.html',
  styleUrl: './go-to-cart.component.css'
})
export class GoToCartComponent implements OnInit {
  cartItems: { product: IProduct, quantity: number }[] = [];

  
  total: number = 0;

  constructor(private cartService: CartService, private router:Router) {}

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.cartItems = this.cartService.getCartItems();
    this.total = this.cartService.getCartTotal();
  }

  goBackToProductPage(){
    this.router.navigate(['/products'])
  }

  totalProduct:number=1;
  increaseTotalPriceWithItemCount(id: number) {
    // if(this.totalProduct>0){
      // this.totalProduct=this.totalProduct+1;
      this.total = this.cartService.increaseCartPrice(id);
      this.loadCart(); // refresh items in case quantity changed
    // }
  }

  decreaseTotalPriceWithItemCount(id: number) {
    // if(this.totalProduct>1){
      // this.totalProduct=this.totalProduct-1; 
      this.total = this.cartService.decreaseCartPrice(id);
      this.loadCart();
    // }
  }

  removeItem(id: number) {
    this.cartService.removeFromCart(id);
    this.loadCart();
  }
}
