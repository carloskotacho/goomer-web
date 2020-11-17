import { Component, OnInit, ViewChild } from '@angular/core';

import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';

import { ProductFilter, ProductService } from './../product.service';

@Component({
  selector: 'app-products-search',
  templateUrl: './products-search.component.html',
  styleUrls: ['./products-search.component.css']
})
export class ProductsSearchComponent implements OnInit {

  loading: boolean;

  totalElements = 0;
  filter = new ProductFilter();
  products = [];
  @ViewChild('table', {static: true}) grid: Table;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.loading = true;
  }

  index(page = 1) {
    this.filter.page = page;

    this.productService.index(this.filter)
      .then(response => {
        this.totalElements = response['count'];
        this.products = response['rows'];
      });
  }

  delete(product: any) {
    this.productService.delete(product.id)
      .then(() => {
        this.grid.clear();
      });
  }

  nextPage(event: LazyLoadEvent) {
    const page = (event.first / event.rows) + 1;

    setTimeout(() => {
      this.index(page);
      this.loading = false;
    }, 1000);
  }
}
