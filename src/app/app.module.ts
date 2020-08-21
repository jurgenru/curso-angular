import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Dish1Component } from './MODULESEX/DishModule/dish/components/dish1/dish1.component';
import { Dish2Component } from './MODULESEX/DishModule/dish/components/dish2/dish2.component';


@NgModule({
  declarations: [
    AppComponent,
   Dish1Component,
   Dish2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
