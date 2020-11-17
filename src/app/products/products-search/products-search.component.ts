import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
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

  nextPage(event: LazyLoadEvent) {
    const page = (event.first / event.rows) + 1;

    setTimeout(() => {
      this.index(page);
      this.loading = false;
    }, 1000);
  }
}
