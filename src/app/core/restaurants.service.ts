import { Injectable } from '@angular/core';
import { Restaurant } from '../restaurants/restaurant.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ErrorHandler } from '../app-error-handler';

const URL = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http: HttpClient ) { }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${URL}/restaurants`).pipe(
      map(res => { return res }),
      catchError(ErrorHandler.handleError)
    )
  }

  getRestaurantById(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${URL}/restaurants/${id}`).pipe(
      map(res => { return res }),
      catchError(ErrorHandler.handleError)
    )
  }
}
