import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RestaurantsModule } from './restaurants/restaurants.module';
import { ProductsModule } from './products/products.module';

// import { CardModule } from 'primeng/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RestaurantService } from './restaurants/restaurant.service';
import { ProductService } from './products/product.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    CoreModule,
    RestaurantsModule,
    ProductsModule,

    // CardModule,

    AppRoutingModule
  ],
  providers: [RestaurantService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
