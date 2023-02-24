import { Injectable } from '@angular/core';
import { interfaceblueprint } from './interfaceblueprint'; //importing blue print for dishes how should it look

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Array<interfaceblueprint> = [];
  constructor() {}

  addToCart(dish: interfaceblueprint){
    this.cart.push(dish);
  }
  getCart() {
    return this.cart;
  }
  clearCart(){
    this.cart = [];
    return this.cart;
  }
}
