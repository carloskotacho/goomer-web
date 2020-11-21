import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { SplitButtonModule } from 'primeng/splitbutton';

import { SharedModule } from './../shared/shared.module';
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
    RouterModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    CalendarModule,
    ChipsModule,
    SplitButtonModule,

    SharedModule,
  ],
  exports: [
    RestaurantStoreComponent,
    RestaurantsSearchComponent
  ]
})
export class RestaurantsModule { }
