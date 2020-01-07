import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { MenuItem } from '../models/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  items: CartItem[] = []


  constructor() { }

  addItem(item: MenuItem) {
    let foundItem = this.items.find(mItem => mItem.menuItem.id == item.id)
    if (foundItem) {
      foundItem.quantity = foundItem.quantity + 1
    } else {
      this.items.push(new CartItem(item))
    }
  }

  removeItem(item: CartItem) {
    if (item.quantity > 1) {
      item.quantity = item.quantity - 1
    } else {
      this.items.splice(this.items.indexOf(item), 1)
    }
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
