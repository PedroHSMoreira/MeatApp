import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { RestaurantsService } from '../core/restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]

  constructor(private restService: RestaurantsService) { }

  ngOnInit() {
    this.restaurants = this.restService.getRestaurants()
  }

}
