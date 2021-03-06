import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../core/restaurants.service';

import { Restaurant } from '../models/restaurant.model';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';


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
    .pipe(take(1))
    .subscribe(restaurant => this.restaurant = restaurant)
  }

}
