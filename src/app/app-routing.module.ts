import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'; //added home to routing
import { AboutComponent } from './about/about.component'; //added abour to routing
import { MenuComponent } from './menu/menu.component'; //added menu to routing
import { DetailsComponent } from './details/details.component'; //added details to routing
import { CartComponent } from './cart/cart.component'; //added cart to routing


const routes: Routes = [{
  path: "", component: HomeComponent
},{
  path: "cart", component: CartComponent
},{
  path: "about", component: AboutComponent
},{
  path: "menu", component: MenuComponent
},{
  path: "menu/:prid", component: DetailsComponent
},{
  path: "**", component: HomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
