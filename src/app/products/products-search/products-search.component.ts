import { Component, OnInit } from '@angular/core';
import { ProductFilter, ProductService } from './../product.service';

@Component({
  selector: 'app-products-search',
  templateUrl: './products-search.component.html',
  styleUrls: ['./products-search.component.css']
})
export class ProductsSearchComponent implements OnInit {

  loading: boolean;

  filter = new ProductFilter();
  products = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {

    this.loading = true;
    setTimeout(() => {
      this.index();
      this.loading = false;
    }, 1000);

  }

  index() {
    this.productService.index(this.filter)
      .then(products => this.products = products);
  }
}
