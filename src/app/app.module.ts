import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RestaurantsModule } from './restaurants/restaurants.module';

import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CheckboxModule } from 'primeng/checkbox';
import { CurrencyMaskModule } from 'ng2-currency-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { ProductStoreComponent } from './product-store/product-store.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductSearchComponent,
    ProductStoreComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

    RestaurantsModule,

    MenubarModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    ChipsModule,
    SplitButtonModule,
    SelectButtonModule,
    CheckboxModule,
    CurrencyMaskModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
