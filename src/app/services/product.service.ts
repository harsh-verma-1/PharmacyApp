// src/app/services/product.service.ts

import { Injectable } from '@angular/core';
import { IProduct } from '../utility/IProduct';
import { PRODUCTS } from '../component/products/product-data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: IProduct[] = PRODUCTS;

  constructor() {}

  getProduct(): IProduct[] {
    return this.products;
  }

  getProductById(id: number): IProduct | undefined {
    return this.products.find(product => product.id === Number(id));
  }
}
