import { Injectable } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorHandler } from '../app-error-handler';
import { MenuItem } from '../models/menu-item.model';

const URL = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http: HttpClient) { }

  getRestaurants(search?: string): Observable<Restaurant[]> {
    let params: HttpParams = undefined
    if (search) {
      params = new HttpParams().set('q', search)
    }
    return this.http.get<Restaurant[]>(`${URL}/restaurants`, { params: params }).pipe(
      catchError(ErrorHandler.handleError)
    )
  }

  getRestaurantById(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${URL}/restaurants/${id}`).pipe(
      catchError(ErrorHandler.handleError)
    )
  }

  getRestaurantReviews(id: string): Observable<any> {
    return this.http.get(`${URL}/restaurants/${id}/reviews`).pipe(
      catchError(ErrorHandler.handleError)
    )
  }

  menuOfRestaurants(id: string): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(`${URL}/restaurant/${id}/menu`).pipe(
      catchError(ErrorHandler.handleError)
    )
  }
}
