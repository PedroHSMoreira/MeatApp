import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { OrderComponent } from 'src/app/order/order.component';

@Injectable({
  providedIn: 'root'
})
export class LeaveOrderGuard implements CanDeactivate<OrderComponent> {

  canDeactivate(orderCOmponent: OrderComponent, activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): boolean {
    if(!orderCOmponent.isOrderCompleted()) {
      return window.confirm('Deseja desistir da compra?')
    } else {
      return true
    }
  }
}
