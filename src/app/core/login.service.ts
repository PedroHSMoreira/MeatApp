import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { tap, filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';

const URL = 'http://localhost:3001'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: User
  lastUrl: string

  constructor(private http: HttpClient, private router: Router) {
    this.router.events.pipe(
      filter(ev => ev instanceof NavigationEnd)
    ).subscribe((ev: NavigationEnd) => this.lastUrl = ev.url)
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${URL}/login`, { email, password }).pipe(
      tap(user => this.user = user)
    )
  }

  logout() {
    this.user = undefined
  }

  isLoggedIn(): boolean {
    return this.user !== undefined
  }

  handleLogin(path: string = this.lastUrl) {
    this.router.navigate(['/login', btoa(path)])
  }

}
