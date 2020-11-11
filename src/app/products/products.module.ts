import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CheckboxModule } from 'primeng/checkbox';
import { CurrencyMaskModule } from 'ng2-currency-mask';

import { ProductStoreComponent } from './product-store/product-store.component';
import { ProductsSearchComponent } from './products-search/products-search.component';

@NgModule({
  declarations: [
    ProductStoreComponent,
    ProductsSearchComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    CalendarModule,
    ChipsModule,
    SplitButtonModule,
    SelectButtonModule,
    CheckboxModule,
    CurrencyMaskModule,
  ],
  exports: [
    ProductStoreComponent,
    ProductsSearchComponent,
  ]
})
export class ProductsModule { }
