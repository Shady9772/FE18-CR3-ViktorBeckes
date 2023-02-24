import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params} from '@angular/router'
import { dishes } from '../menu/dishes';
import { interfaceblueprint } from '../interfaceblueprint';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  dish: interfaceblueprint ={} as interfaceblueprint;
  prid: number = 0;
  
  constructor (private route: ActivatedRoute,private CS: CartService ) {

  }

  addToCart(){
    alert("added to cart");
    this.CS.addToCart(this.dish)
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.prid = +params["prid"];
      this.dish = dishes[this.prid];
    });
  }
}
