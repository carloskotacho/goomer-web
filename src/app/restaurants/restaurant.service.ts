import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  restaurantsUrl = 'http://localhost:3333/api/restaurants';

  constructor(private http: HttpClient) { }

  index(): Promise<any> {
    return this.http.get(`${this.restaurantsUrl}/v1`)
      .toPromise()
      .then(response => response);
  }
}
