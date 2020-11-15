import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

export class RestaurantFilter {
  search: string;
  page = 1;
  itemsByPage = 5;
}

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  restaurantsUrl = 'http://localhost:3333/api/restaurants';

  constructor(private http: HttpClient) { }

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
}
