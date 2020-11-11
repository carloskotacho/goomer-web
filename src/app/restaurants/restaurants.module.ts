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
import { RestaurantsSearchComponent } from './restaurants-search/restaurants-search.component';

@NgModule({
  declarations: [
    RestaurantStoreComponent,
    RestaurantsSearchComponent,
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
    RestaurantsSearchComponent,
  ]
})
export class RestaurantsModule { }
