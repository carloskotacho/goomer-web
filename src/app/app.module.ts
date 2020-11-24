import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantsModule } from './restaurants/restaurants.module';
import { ProductsModule } from './products/products.module';

// import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RestaurantsSearchComponent } from './restaurants/restaurants-search/restaurants-search.component';
import { ProductsSearchComponent } from './products/products-search/products-search.component';
import { ProductStoreComponent } from './products/product-store/product-store.component';
import { RestaurantStoreComponent } from './restaurants/restaurant-store/restaurant-store.component';
import { PageNotFoundComponent } from './core/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'restaurantes/v1', pathMatch: 'full' },
  { path: 'restaurantes/v1', component: RestaurantsSearchComponent },
  { path: 'restaurantes/novo/v1', component: RestaurantStoreComponent },
  { path: 'produtos/v1', component: ProductsSearchComponent },
  { path: 'produtos/novo/v1', component: ProductStoreComponent },

  { path: 'pagina-nao-encontrada', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'pagina-nao-encontrada' }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),

    CoreModule,
    RestaurantsModule,
    ProductsModule,

    ConfirmDialogModule,
    // CardModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
