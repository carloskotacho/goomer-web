import { Component, OnInit } from '@angular/core';

import { SelectItem } from 'primeng/api';

import { ErrorHandlerService } from './../../core/error-handler.service';
import { RestaurantService } from 'src/app/restaurants/restaurant.service';

@Component({
  selector: 'app-product-store',
  templateUrl: './product-store.component.html',
  styleUrls: ['./product-store.component.css']
})
export class ProductStoreComponent implements OnInit {

  startHours: Date;

  endHours: Date;

  selectedValues: string[] = [];

  options: any[];

  valueDefaultOption = 'NÃO';

  restaurants: [];

  constructor(
    private restaurantService: RestaurantService,
    private errorHandler: ErrorHandlerService,
  ) {
    this.options = [
      { label: 'Não', value: 'NÃO' },
      { label: 'Sim', value: 'SIM' },
    ];
  }

  ngOnInit() {
    this.loadRestaurant();
  }

  loadRestaurant() {
    return this.restaurantService.listAll()
      .then(restaurants => {
        this.restaurants = restaurants['rows'].map(r => ({ label: r.name, value: r.id }));
      })
      .catch(err => this.errorHandler.handle(err));
  }
}
