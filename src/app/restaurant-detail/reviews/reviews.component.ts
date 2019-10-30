import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'src/app/core/restaurants.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(private api: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.api.getRestaurantReviews(this.route.parent.snapshot.params['id'])
  }

}
