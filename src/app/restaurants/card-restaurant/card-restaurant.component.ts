import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../../models/restaurant.model';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'mt-card-restaurant',
  templateUrl: './card-restaurant.component.html',
  styleUrls: ['./card-restaurant.component.css'],
  animations: [
    trigger('restaurantApperead', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translate(-30px, -10px)' }),
        animate('300ms 0s ease-in-out')
      ])
    ])
  ]
})
export class CardRestaurantComponent implements OnInit {

  restaurantState: string = 'ready'

  @Input() restaurant: Restaurant

  constructor() { }

  ngOnInit() {
  }

}
