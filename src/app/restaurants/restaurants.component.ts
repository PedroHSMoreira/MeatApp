import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';
import { RestaurantsService } from '../core/restaurants.service';
import { take, switchMap } from 'rxjs/operators';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
  animations: [
    trigger('toggleSearch', [
      state('hidden', style({
        opacity: 0,
        "max-height": "0px",
      })),
      state('visible', style({
        opacity: 1,
        "max-height": "70px",
        "margin-top": "20px"
      })),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]
  searchVisibility: string = 'hidden'

  searchForm: FormGroup
  searchControl: FormControl

  constructor(private api: RestaurantsService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.searchControl = this.formBuilder.control('')
    this.searchForm = this.formBuilder.group({
      searchControl: this.searchControl
    })

    this.searchControl.valueChanges.pipe(
      switchMap(searchTerm => this.api.getRestaurants(searchTerm))
    )
      .subscribe(restaurants => this.restaurants = restaurants, err => alert(err))

    this.api.getRestaurants()
      .pipe(take(1))
      .subscribe(restaurants => this.restaurants = restaurants, err => alert(err))
  }

  toggleSearchBar() {
    this.searchVisibility = this.searchVisibility === 'hidden' ? 'visible' : 'hidden'
  }

}
