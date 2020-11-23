import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';

moment.locale('pt-br');

import { Product } from '../core/model';

export class ProductFilter {
  search: string;
  page = 1;
  itemsByPage = 5;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsUrl = 'http://localhost:3333/api/products';

  constructor(private http: HttpClient) { }

  index(filter: ProductFilter): Promise<any> {
    let params = new HttpParams();

    if (filter.page) {
      params = params.set('page', filter.page.toString());
    }

    /*if (filter.itemsByPage) {
      params = params.set('size', filter.itemsByPage.toString());
    }*/

    if (filter.search) {
      params = params.set('search', filter.search);
    }

    return this.http.get(`${this.productsUrl}/v1`, { params })
      .toPromise()
      .then(response => response);
  }

  delete(id: number): Promise<void> {
    return this.http.delete(`${this.productsUrl}/${id}/v1`)
      .toPromise()
      .then(() => null);
  }

  store(product: Product): Promise<Product> {
    product.promotion_start_time = this.formatTime(product.promotion_start_time);
    product.promotion_end_time = this.formatTime(product.promotion_end_time);

    return this.http.post<Product>(`${this.productsUrl}/v1`, product)
      .toPromise()
      .then(response => response);
  }

  update(product: Product): Promise<Product> {
    product.promotion_start_time = this.formatTime(product.promotion_start_time);
    product.promotion_end_time = this.formatTime(product.promotion_end_time);

    return this.http.put<Product>(`${this.productsUrl}/${product.id}/v1`, product)
      .toPromise()
      .then(response => response);
  }

  findById(id: number): Promise<Product> {
    return this.http.get(`${this.productsUrl}/${id}/v1`)
      .toPromise()
      .then(response => {
        const product = response as Product;

        return product;
      });
  }

  formatTime(time: string) {
    return moment(time).format('LT');
  }
}
