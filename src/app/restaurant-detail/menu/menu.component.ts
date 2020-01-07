import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'src/app/core/restaurants.service';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from '../../models/menu-item.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>

  constructor(private api: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.api.menuOfRestaurants(this.route.parent.snapshot.params['id'])
  }

  addMenuItem(item: MenuItem) {
    console.log(item)
  }

}
