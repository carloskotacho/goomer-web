import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantsSearchComponent } from './restaurants/restaurants-search/restaurants-search.component';
import { ProductsSearchComponent } from './products/products-search/products-search.component';
import { ProductStoreComponent } from './products/product-store/product-store.component';
import { RestaurantStoreComponent } from './restaurants/restaurant-store/restaurant-store.component';
import { PageNotFoundComponent } from './core/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'restaurantes/v1', pathMatch: 'full' },
  { path: 'restaurantes/v1', component: RestaurantsSearchComponent },
  { path: 'restaurantes/novo/v1', component: RestaurantStoreComponent },
  { path: 'restaurantes/:id/v1', component: RestaurantStoreComponent },
  { path: 'produtos/v1', component: ProductsSearchComponent },
  { path: 'produtos/novo/v1', component: ProductStoreComponent },
  { path: 'products/:id/v1', component: ProductStoreComponent },
  { path: 'pagina-nao-encontrada', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'pagina-nao-encontrada' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
