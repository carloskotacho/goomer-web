import { Component, OnInit, ViewChild } from '@angular/core';

import { LazyLoadEvent, ConfirmationService } from 'primeng/api';
import { ToastyService } from 'ng2-toasty';
import { Table } from 'primeng/table';

import { ErrorHandlerService } from './../../core/error-handler.service';
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

  constructor(
    private productService: ProductService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService
  ) { }

  ngOnInit() {
    this.loading = true;
  }

  index(page = 1) {
    this.filter.page = page;

    this.productService.index(this.filter)
      .then(response => {
        this.totalElements = response['count'];
        this.products = response['rows'];
      })
      .catch(err => this.errorHandler.handle(err));
  }

  confirmDelete(product: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.delete(product);
      }
    });
  }

  delete(product: any) {
    this.productService.delete(product.id)
      .then(() => {
        this.grid.clear();

        this.toasty.success('Produto excluído com sucesso!');
      })
      .catch(err => this.errorHandler.handle(err.error.error));
  }

  nextPage(event: LazyLoadEvent) {
    const page = (event.first / event.rows) + 1;

    setTimeout(() => {
      this.index(page);
      this.loading = false;
    }, 1000);
  }
}
