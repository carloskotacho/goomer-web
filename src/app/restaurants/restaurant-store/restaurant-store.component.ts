import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ToastyService } from 'ng2-toasty';

import { Restaurant } from 'src/app/core/model';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-store',
  templateUrl: './restaurant-store.component.html',
  styleUrls: ['./restaurant-store.component.css']
})
export class RestaurantStoreComponent implements OnInit {

  restaurant = new Restaurant();

  constructor(
    private restaurantService: RestaurantService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const restaurantId = this.route.snapshot.params['id'];

    if (restaurantId) {
      this.loadRestaurant(restaurantId);
    }
  }

  get editing() {
    return Boolean(this.restaurant.id);
  }

  loadRestaurant(id: number) {
    this.restaurantService.findById(id)
      .then(restaurant => {
        this.restaurant = restaurant;
      })
      .catch(err => this.errorHandler.handle(err.error.error));
  }

  save(form: NgForm) {
    if (this.editing) {
      this.updateRestaurant(form);
    } else {
      this.addRestaurant(form);
    }
  }

  addRestaurant(form: NgForm) {
    this.restaurantService.store(this.restaurant)
      .then(() => {
        this.toasty.success('Restaurante adicionado com sucesso!');

        form.reset();
        this.restaurant = new Restaurant();
      })
      .catch(err => this.errorHandler.handle(err.error.error));
  }

  updateRestaurant(form: NgForm) {
    this.restaurantService.update(this.restaurant)
      .then(restaurant => {
        this.restaurant = restaurant;

        this.toasty.success('Restaurante alterado com sucesso!');
      })
      .catch(err => this.errorHandler.handle(err));
  }
}
