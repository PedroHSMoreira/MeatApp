import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../models/radio-option.model';
import { OrderService } from '../core/order.service';
import { CartItem } from '../models/cart-item.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartão de Débito', value: 'DEB' },
    { label: 'Cartão de Cŕedito', value: 'CRE' },
    { label: 'Cartão Refeição', value: 'REF' },
  ]
  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  cartItems() {
    return this.orderService.cartItems()
  }

  increaseQty(item: CartItem) {
    this.orderService.increaseQty(item)
  }

  decreaseQty(item: CartItem) {
    this.orderService.decreaseQty(item)
  }

  remove(item: CartItem) {
    this.orderService.remove(item)
  }
}
