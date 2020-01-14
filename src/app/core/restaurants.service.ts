import { Injectable } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MenuItem } from '../models/menu-item.model';

const URL = 'https://localhost:3001'

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
    return this.http.get<Restaurant[]>(`${URL}/restaurants`, { params: params })
  }

  getRestaurantById(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${URL}/restaurants/${id}`)
  }

  getRestaurantReviews(id: string): Observable<any> {
    return this.http.get(`${URL}/restaurants/${id}/reviews`)
  }

  menuOfRestaurants(id: string): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(`${URL}/restaurant/${id}/menu`)
  }
}
