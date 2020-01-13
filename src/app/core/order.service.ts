import { Injectable } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { CartItem } from '../models/cart-item.model';
import { Order } from '../models/order.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const URL = 'https://localhost:3001'

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private cartService: ShoppingCartService, private http: HttpClient) { }

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
    return this.http.post<Order>(`${URL}/orders`, order)
  }

  clear() {
    this.cartService.clear()
  }
}
