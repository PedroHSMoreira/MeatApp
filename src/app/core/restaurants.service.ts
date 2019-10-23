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
    return this.http.get<Restaurant[]>(`${URL}/restaurants1`).pipe(
      map(res => { return res }),
      catchError(ErrorHandler.handleError)
    )
  }
}
