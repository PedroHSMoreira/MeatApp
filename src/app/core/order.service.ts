import { Injectable } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { CartItem } from '../models/cart-item.model';
import { Order, OrderItem } from '../models/order.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

const URL = 'http://localhost:3000'

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

  checkOrder(order: Order): Observable<string> {
    const headers =  new HttpHeaders()
    headers.append('Content-Type', 'application/json')
    return this.http.post<Order>(`${URL}/orders`, order, {headers: headers}).pipe(
      map(res => JSON.stringify(res))
    )
  }

  clear() {
    this.cartService.clear()
  }
}
