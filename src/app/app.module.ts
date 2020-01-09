import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { LottieModule } from 'ngx-lottie';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { CardRestaurantComponent } from './restaurants/card-restaurant/card-restaurant.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { OrderComponent } from './order/order.component';
import { OrderItemsComponent } from './order/order-items/order-items.component';
import { DeliveryCostsComponent } from './order/delivery-costs/delivery-costs.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { SharedModule } from './shared/shared.module';


export function playerFactory() {
  return import('lottie-web');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantsComponent,
    CardRestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderComponent,
    OrderItemsComponent,
    DeliveryCostsComponent,
    OrderSummaryComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
