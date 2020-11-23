import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { SelectItem } from 'primeng/api';
import { ToastyService } from 'ng2-toasty';

import { ProductService } from './../product.service';
import { RestaurantService } from 'src/app/restaurants/restaurant.service';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { Product } from 'src/app/core/model';

@Component({
  selector: 'app-product-store',
  templateUrl: './product-store.component.html',
  styleUrls: ['./product-store.component.css']
})
export class ProductStoreComponent implements OnInit {

  startHours: Date;

  endHours: Date;

  promotion: any[];

  valueDefaultPromotion = false;

  restaurants: [];

  product = new Product();

  constructor(
    private productService: ProductService,
    private restaurantService: RestaurantService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService,
    private route: ActivatedRoute,
  ) {
    this.promotion = [
      { label: 'Não', value: false },
      { label: 'Sim', value: true },
    ];
  }

  ngOnInit() {
    const productId = this.route.snapshot.params['id'];

    if (productId) {
      this.loadProduct(productId);
    }

    this.loadRestaurant();
    this.product.promotion = false;
  }

  loadProduct(id: number) {
    this.productService.findById(id)
      .then(product => {
        this.product = product;

        console.log('Day Week: ', this.product.day_week);
        console.log('Promotion: ', this.product.promotion);
      })
      .catch(err => this.errorHandler.handle(err.error.error));
  }

  loadRestaurant() {
    return this.restaurantService.listAll()
      .then(restaurants => {
        this.restaurants = restaurants.map(r => ({ label: r.name, value: r.id }));
      })
      .catch(err => this.errorHandler.handle(err));
  }

  save(form: NgForm) {
    this.productService.store(this.product)
      .then(() => {
        this.toasty.success('Produto adicionado com sucesso!');

        form.reset();
        this.product = new Product();
      })
      .catch(err => this.errorHandler.handle(err.error.error));
  }

  updateProduct(form: NgForm) {
    this.productService.update(this.product)
      .then(product => {
        this.product = product;

        this.toasty.success('Produto alterado com sucesso!');
      })
      .catch(err => this.errorHandler.handle(err));
  }
}
