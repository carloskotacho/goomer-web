import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { SplitButtonModule } from 'primeng/splitbutton';

import { RestaurantStoreComponent } from './restaurant-store/restaurant-store.component';
import { RestaurantSearchComponent } from './restaurant-search/restaurant-search.component';

@NgModule({
  declarations: [
    RestaurantStoreComponent,
    RestaurantSearchComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    CalendarModule,
    ChipsModule,
    SplitButtonModule
  ],
  exports: [
    RestaurantStoreComponent,
    RestaurantSearchComponent,
  ]
})
export class RestaurantsModule { }
