import { Component, OnInit } from '@angular/core';
import { ProductFilter, ProductService } from './../product.service';

@Component({
  selector: 'app-products-search',
  templateUrl: './products-search.component.html',
  styleUrls: ['./products-search.component.css']
})
export class ProductsSearchComponent implements OnInit {

  filter = new ProductFilter();
  products = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.index();
  }

  index() {
    this.productService.index(this.filter)
      .then(products => this.products = products);
  }
}
