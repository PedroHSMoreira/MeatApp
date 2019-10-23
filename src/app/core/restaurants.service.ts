import { Injectable } from '@angular/core';
import { Restaurant } from '../restaurants/restaurant.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const URL = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http: HttpClient ) { }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${URL}/restaurants`).pipe(
      map(res => { return res })
    )
  }
}
