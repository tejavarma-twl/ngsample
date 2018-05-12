import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { Service1Component } from './services/service1/service1.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    ServicesComponent,
    Service1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
