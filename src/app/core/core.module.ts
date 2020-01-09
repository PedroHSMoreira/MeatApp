import { NgModule } from '@angular/core';

import { RestaurantsService } from './restaurants.service';
import { ShoppingCartService } from './shopping-cart.service';
import { OrderService } from './order.service';



@NgModule({
  providers: [
    RestaurantsService,
    ShoppingCartService, 
    OrderService
  ]
})
export class CoreModule { }
