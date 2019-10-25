import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../core/restaurants.service';

import { Restaurant } from '../restaurants/restaurant.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant
  
  constructor(private api: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.api.getRestaurantById(this.route.snapshot.params['id'])
    .subscribe(restaurant => this.restaurant = restaurant)
  }

}
