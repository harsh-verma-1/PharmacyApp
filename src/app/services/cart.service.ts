import { Injectable, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { IProduct } from '../utility/IProduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: { product: IProduct, quantity: number }[] = [];
  private isBrowser: boolean;

  constructor() {
    const platformId = inject(PLATFORM_ID);
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        this.cart = JSON.parse(storedCart);
      } 
    }
  }

  private saveCartToStorage() {
    if (this.isBrowser) {
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }

  addToCart(product: IProduct) {
    const index = this.cart.findIndex(item => item.product.id === product.id);
    if (index !== -1) {
      this.cart[index].quantity += 1;
    } else {
      this.cart.push({ product, quantity: 1 });
    }
    this.saveCartToStorage();
  }

  getCartItems(): { product: IProduct, quantity: number }[] {
    return this.cart;
  }

  getCartTotal(): number {
    return this.cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

  removeFromCart(productId: number) {
    this.cart = this.cart.filter(item => item.product.id !== productId);
    this.saveCartToStorage();
  }

  increaseCartPrice(productId: number): number {
    const item = this.cart.find(item => item.product.id === productId);
    if (item) {
      item.quantity += 1;
      this.saveCartToStorage();
    }
    return this.getCartTotal();
  }

  decreaseCartPrice(productId: number): number {
    const item = this.cart.find(item => item.product.id === productId);
    if (item && item.quantity > 1) {
      item.quantity -= 1;
      this.saveCartToStorage();
    }
    return this.getCartTotal();
  }
}



// So to answer your question:
// how this.saveCartToStorage works

// You don’t pass any values to saveCartToStorage()
// Because it's always using the current value of this.cart, which your other methods already updated before calling this.

// Think of it like:

// "Hey localStorage, save my cart exactly as it looks right now."