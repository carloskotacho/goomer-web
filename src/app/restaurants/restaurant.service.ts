import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

export class RestaurantFilter {
  search: string;
}

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  restaurantsUrl = 'http://localhost:3333/api/restaurants';

  constructor(private http: HttpClient) { }

  index(filter: RestaurantFilter): Promise<any> {
    let params = new HttpParams();

    if (filter.search) {
      params = params.set('name', filter.search);
    }

    return this.http.get(`${this.restaurantsUrl}/v1`, { params })
      .toPromise()
      .then(response => response);
  }
}
