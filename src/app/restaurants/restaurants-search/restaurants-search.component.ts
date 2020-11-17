import { Component, OnInit, ViewChild } from '@angular/core';

import { LazyLoadEvent } from 'primeng/api';
import { ToastyService, ToastyConfig } from 'ng2-toasty';
import { Table } from 'primeng/table';

import { RestaurantFilter, RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurants-search',
  templateUrl: './restaurants-search.component.html',
  styleUrls: ['./restaurants-search.component.css']
})
export class RestaurantsSearchComponent implements OnInit {

  loading: boolean;

  totalElements = 0;
  filter = new RestaurantFilter();
  restaurants = [];
  @ViewChild('table', {static: true}) grid: Table;

  constructor(
    private restaurantService: RestaurantService,
    private toasty: ToastyService,
    private config: ToastyConfig
    ) { }

    ngOnInit() {
      this.loading = true;
      this.config.theme = 'bootstrap';
  }

  index(page = 1) {
    this.filter.page = page;

    this.restaurantService.index(this.filter)
      .then(response => {
        this.totalElements = response['count'];
        this.restaurants = response['rows'];
      });
  }

  delete(restaurant: any) {

    this.restaurantService.delete(restaurant.id)
    .then(() => {
      this.grid.clear();

      this.toasty.success('Restaurante excluído com sucesso!');
    });
  }

  nextPage(event: LazyLoadEvent) {
    const page = (event.first / event.rows) + 1;

    setTimeout(() => {
      this.index(page);
      this.loading = false;
    }, 1000);
  }
}
