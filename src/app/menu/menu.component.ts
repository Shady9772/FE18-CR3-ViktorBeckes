import { Component } from '@angular/core';
import { dishes } from './dishes'; //importing the info for dishes
import { interfaceblueprint } from '../interfaceblueprint'; //importing blue print for dishes how should it look
import { CartService } from '../cart.service'; //imports cart service 

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menu : Array<interfaceblueprint> = dishes;
  constructor(private CS: CartService){
  }
  addToCart(x: interfaceblueprint){
    alert("Dish was added to cart");
    this.CS.addToCart(x)
  }
}
