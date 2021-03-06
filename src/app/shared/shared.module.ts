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
import { LoginService } from '../core/login.service';
import { LoggedinGuard } from '../core/guards/loggedin.guard';
import { LeaveOrderGuard } from '../core/guards/leave-order.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../core/helpers/auth.interceptor';



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
        NotificationService,
        LoggedinGuard,
        LeaveOrderGuard,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
      ]
    }
  }
}
