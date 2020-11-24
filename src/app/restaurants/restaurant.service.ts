import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';

moment.locale('pt-br');

import { environment } from './../../environments/environment';
import { Restaurant } from '../core/model';

export class RestaurantFilter {
  search: string;
  page = 1;
  itemsByPage = 5;
}

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  restaurantsUrl: string;

  constructor(private http: HttpClient) {
    this.restaurantsUrl = `${environment.apiUrl}/restaurants`;
  }

  index(filter: RestaurantFilter): Promise<any> {
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

    return this.http.get(`${this.restaurantsUrl}/v1`, { params })
      .toPromise()
      .then(response => response);
  }

  listAll(): Promise<any> {
    return this.http.get(`${this.restaurantsUrl}/all/v1`)
      .toPromise()
      .then(response => response);
  }

  delete(id: number): Promise<void> {
    return this.http.delete(`${this.restaurantsUrl}/${id}/v1`)
      .toPromise()
      .then(() => null);
  }

  store(restaurant: Restaurant): Promise<Restaurant> {
    restaurant.week_opening_time = this.formatTime(restaurant.week_opening_time);
    restaurant.week_closing_time = this.formatTime(restaurant.week_closing_time);
    restaurant.weekend_opening_time = this.formatTime(restaurant.weekend_opening_time);
    restaurant.weekend_closing_time = this.formatTime(restaurant.weekend_closing_time);

    return this.http.post<Restaurant>(`${this.restaurantsUrl}/v1`, restaurant)
      .toPromise()
      .then(response => response);
  }

  update(restaurant: Restaurant): Promise<Restaurant> {
    restaurant.week_opening_time = this.formatTime(restaurant.week_opening_time);
    restaurant.week_closing_time = this.formatTime(restaurant.week_closing_time);
    restaurant.weekend_opening_time = this.formatTime(restaurant.weekend_opening_time);
    restaurant.weekend_closing_time = this.formatTime(restaurant.weekend_closing_time);

    return this.http.put<Restaurant>(`${this.restaurantsUrl}/${restaurant.id}/v1`, restaurant)
        .toPromise()
        .then(response => response);
  }

  findById(id: number): Promise<Restaurant> {
    return this.http.get(`${this.restaurantsUrl}/${id}/v1`)
      .toPromise()
      .then(response => {
        const restaurant = response as Restaurant;

        return restaurant;
      });
  }

  formatTime(time: string) {
    return moment(time).format('LT');
  }
}
