import { Injectable } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ErrorHandler } from '../app-error-handler';
import { MenuItem } from '../models/menu-item.model';

const URL = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http: HttpClient ) { }

  getRestaurants(search?: string): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${URL}/restaurants`, {params: {q: search}}).pipe(
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

  getRestaurantReviews(id: string): Observable<any> {
    return this.http.get(`${URL}/restaurants/${id}/reviews`).pipe(
      map(res => { return res }),
      catchError(ErrorHandler.handleError)
    )
  }

  menuOfRestaurants(id: string): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(`${URL}/restaurant/${id}/menu`).pipe(
      map(res => { return res }),
      catchError(ErrorHandler.handleError)
    )
  }
}
