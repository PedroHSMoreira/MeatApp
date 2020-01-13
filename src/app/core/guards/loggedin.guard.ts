import { Injectable } from '@angular/core'
import { CanLoad, Route, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router'
import { LoginService } from '../login.service'
import { NotificationService } from '../notification.service'


@Injectable({
  providedIn: 'root'
})
export class LoggedinGuard implements CanLoad, CanActivate {

  constructor(private loginService: LoginService, private notificationService: NotificationService) { }

  checkAuthentication(path: string): boolean {
    const loggedIn = this.loginService.isLoggedIn()
    if (!loggedIn) {
      this.loginService.handleLogin(`/${path}`)
      this.notificationService.notify('Entre com as suas credenciais para continuar!')
    }
    return loggedIn
  }

  canLoad(route: Route): boolean {
    return this.checkAuthentication(route.path)
  }

  canActivate(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): boolean {
    return this.checkAuthentication(activatedRoute.routeConfig.path)
  }
}
