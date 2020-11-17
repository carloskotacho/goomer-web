import { Component, OnInit, ViewChild } from '@angular/core';

import { LazyLoadEvent, ConfirmationService } from 'primeng/api';
import { ToastyService } from 'ng2-toasty';
import { Table } from 'primeng/table';

import { ErrorHandlerService } from './../../core/error-handler.service';
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
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService
    ) { }

    ngOnInit() {
      this.loading = true;
    }

  index(page = 1) {
    this.filter.page = page;

    this.restaurantService.index(this.filter)
      .then(response => {
        this.totalElements = response['count'];
        this.restaurants = response['rows'];
      })
      .catch(err => this.errorHandler.handle(err));
  }

  confirmDelete(restaurant: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.delete(restaurant);
      }
    });
  }

  delete(restaurant: any) {

    this.restaurantService.delete(restaurant.id)
    .then(() => {
      this.grid.clear();

      this.toasty.success('Restaurante excluído com sucesso!');
    })
    .catch(err => this.errorHandler.handle(err.error.error));
  }

  nextPage(event: LazyLoadEvent) {
    const page = (event.first / event.rows) + 1;

    setTimeout(() => {
      this.index(page);
      this.loading = false;
    }, 1000);
  }
}
