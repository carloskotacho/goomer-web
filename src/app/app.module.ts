import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RestaurantSearchComponent } from './restaurant-search/restaurant-search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RestaurantSearchComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    MenubarModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
