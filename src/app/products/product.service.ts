import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

export class ProductFilter {
  search: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsUrl = 'http://localhost:3333/api/products';

  constructor(private http: HttpClient) { }

  index(filter: ProductFilter): Promise<any> {
    let params = new HttpParams();

    if (filter.search) {
      params = params.set('search', filter.search);
    }

    return this.http.get(`${this.productsUrl}/v1`, { params })
      .toPromise()
      .then(response => response);
  }
}
