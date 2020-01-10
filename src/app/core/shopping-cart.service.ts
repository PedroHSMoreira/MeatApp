import { Injectable } from '@angular/core';

import { NotificationService } from './notification.service';

import { CartItem } from '../models/cart-item.model';
import { MenuItem } from '../models/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  items: CartItem[] = []


  constructor(private notification: NotificationService) { }

  addItem(item: MenuItem) {
    let foundItem = this.items.find(mItem => mItem.menuItem.id == item.id)
    if (foundItem) {
      this.increaseQty(foundItem)
    } else {
      this.items.push(new CartItem(item))
    }
    this.notification.notify(`O item ${item.name} foi adicionado no carrinho!`)
  }

  increaseQty(item: CartItem) {
    item.quantity = item.quantity + 1
  }

  decreaseQty(item: CartItem) {
    if (item.quantity >= 1) {
      item.quantity = item.quantity - 1
    }
    if (item.quantity === 0) {
      this.removeItem(item)
    }
  }

  removeItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1)
    this.notification.notify(`O item ${item.menuItem.name} foi removido do carrinho!`)
  }

  total(): number {
    return this.items
      .map(item => item.value())
      .reduce((prev, value) => prev + value, 0)
  }

  clear() {
    this.items = []
  }


}
