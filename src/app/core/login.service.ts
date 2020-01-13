import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

const URL = 'https://localhost:3001'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: User

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${URL}/login`, { email, password }).pipe(
      tap(user => this.user = user)
    )
  }

  isLoggedIn(): boolean {
    return this.user !== undefined
  }

  handleLogin(path?: string) {
    this.router.navigate(['/login', btoa(path)])
  }
}
