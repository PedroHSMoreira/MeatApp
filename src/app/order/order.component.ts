import { Component, OnInit } from '@angular/core';
import { RadioOption } from '../models/radio-option.model';
import { OrderService } from '../core/order.service';
import { CartItem } from '../models/cart-item.model';
import { Order, OrderItem } from '../models/order.model';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup

  delivery: number = 8
  paymentOptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartão de Débito', value: 'DEB' },
    { label: 'Cartão de Cŕedito', value: 'CRE' },
    { label: 'Cartão Refeição', value: 'REF' },
  ]
  constructor(private orderService: OrderService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: this.formBuilder.control('', [Validators.required, Validators.email]),
      emailConfirmation: this.formBuilder.control('', [Validators.required, Validators.email]),
      address: ['', [Validators.required, Validators.minLength(5)]],
      number: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      optionalAddress: '',
      paymentOption: ['', [Validators.required]]
    })
  }

  itemsValue(): number {
    return this.orderService.itemsValue()
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

  checkOrder(order: Order) {
    order.orderItems = this.cartItems().map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id))
    this.orderService.checkOrder(order).subscribe( (orderId: string) => {
      this.router.navigate(['/order-summary'])
      this.orderService.clear()
    })
    console.log(order)
  }
}
