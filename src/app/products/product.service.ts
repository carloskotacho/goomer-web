import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

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
}
