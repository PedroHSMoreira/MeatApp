import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../login.service';

@Injectable({ providedIn: 'root' })
export class AuthInterceptor implements HttpInterceptor {

    constructor(private loginService: LoginService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.loginService.isLoggedIn()) {
            const authReq = req.clone({
                setHeaders: {
                    'Authorization': `Bearer ${this.loginService.user.accessToken}`
                }
            })
            return next.handle(authReq)
        } else {

            return next.handle(req);
        }
    }
}