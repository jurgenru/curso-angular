import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComidaComponent } from './modules/comida/components/comida/comida.component';
import { Dish1Component } from './dish1/dish1.component';
import { Dish2Component } from './dish2/dish2.component';

@NgModule({
  declarations: [
    AppComponent,
    ComidaComponent,
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
