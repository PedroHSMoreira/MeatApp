import { Injectable } from '@angular/core';

import { ShoppingCartService } from './shopping-cart.service';
import { LoginService } from './login.service';

import { CartItem } from '../models/cart-item.model';
import { Order } from '../models/order.model';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const URL = 'https://localhost:3001'

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private cartService: ShoppingCartService, private http: HttpClient, private loginService: LoginService) { }

  itemsValue(): number {
    return this.cartService.total()
  }

  cartItems(): CartItem[] {
    return this.cartService.items
  }

  increaseQty(item: CartItem) {
    this.cartService.increaseQty(item)
  }

  decreaseQty(item: CartItem) {
    this.cartService.decreaseQty(item)
  }

  remove(item: CartItem) {
    this.cartService.removeItem(item)
  }

  checkOrder(order: Order): Observable<Order> {
    let headers = new HttpHeaders()
    if (this.loginService.isLoggedIn()) {
      headers = headers.set('Authorization', `Bearer ${this.loginService.user.accessToken}`)
    }
    return this.http.post<Order>(`${URL}/orders`, order, { headers })
  }

  clear() {
    this.cartService.clear()
  }
}
