import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RestaurantsService } from '../core/restaurants.service';
import { ShoppingCartService } from '../core/shopping-cart.service';
import { OrderService } from '../core/order.service';
import { NotificationService } from '../core/notification.service';

import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';
import { SnackbarComponent } from './snackbar/snackbar.component';



@NgModule({
  declarations: [
    InputComponent,
    RadioComponent,
    RatingComponent,
    SnackbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    InputComponent,
    RadioComponent,
    RatingComponent,
    SnackbarComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        RestaurantsService,
        ShoppingCartService, 
        OrderService,
        NotificationService
      ]
    }
  }
 }
