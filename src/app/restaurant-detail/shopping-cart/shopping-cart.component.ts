import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/core/shopping-cart.service';
import { CartItem } from './cart-item.mode';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { MenuItem } from '../menu-item/menu-item.model';


@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

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
    console.log(this.items)
  }

  items(): CartItem[] {
    return this.serviceCart.items
  }


  removeItem(item: any) {
    this.serviceCart.removeItem(item)
  }

  addItem(item: MenuItem) {
    this.serviceCart.addItem(item)
  }

  clear() {
    this.serviceCart.clear()
  }

  total(): number {
    return this.serviceCart.total()
  }

}
