import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../../models/restaurant.model';

@Component({
  selector: 'mt-card-restaurant',
  templateUrl: './card-restaurant.component.html',
  styleUrls: ['./card-restaurant.component.css']
})
export class CardRestaurantComponent implements OnInit {

 @Input() restaurant: Restaurant
 
  constructor() { }

  ngOnInit() {
  }

}
