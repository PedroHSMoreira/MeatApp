import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/core/shopping-cart.service';
import { CartItem } from '../../models/cart-item.model';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { MenuItem } from '../../models/menu-item.model';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';


@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
  animations: [
    trigger('row', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', animate('500ms 0s ease-in', keyframes([
        style({ opacity: 0, transform: 'translateX(-30px)', offset: 0 }),
        style({ opacity: 0.8, transform: 'translateX(10px)', offset: 0.8 }),
        style({ opacity: 1, transform: 'translateX(0px)', offset: 1 })
      ]))),
      transition('ready => void', animate('500ms 0s ease-out', keyframes([
        style({ opacity: 1, transform: 'translateX(0px)', offset: 0 }),
        style({ opacity: 0.8, transform: 'translateX(-10px)', offset: 0.2 }),
        style({ opacity: 0, transform: 'translateX(30px)', offset: 1 })
      ])))
    ])
  ]
})
export class ShoppingCartComponent implements OnInit {

  rowState: string = 'ready'

  options: AnimationOptions = {
    path: '../assets/animations/empty.json',
    renderer: 'svg',
    autoplay: true,
    loop: true
  }

  styles: Partial<CSSStyleDeclaration> = {
    maxWidth: '100px',
    margin: '0 auto'
  };

  constructor(private serviceCart: ShoppingCartService) { }

  ngOnInit() {

  }

  items(): CartItem[] {
    return this.serviceCart.items
  }


  addItem(item: MenuItem) {
    this.serviceCart.addItem(item)
  }

  decreaseQty(item: CartItem) {
    this.serviceCart.decreaseQty(item)
  }

  clear() {
    this.serviceCart.clear()
  }

  total(): number {
    return this.serviceCart.total()
  }


}
