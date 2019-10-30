import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant.model';
import { RestaurantsService } from '../core/restaurants.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]

  constructor(private api: RestaurantsService) { }

  ngOnInit() {
     this.api.getRestaurants()
     .pipe(take(1))
     .subscribe(restaurants => this.restaurants = restaurants, err => alert(err))
  }

}
