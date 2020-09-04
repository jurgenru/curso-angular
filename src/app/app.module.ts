import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Dish1Component } from './MODULESEX/DishModule/dish/components/dish1/dish1.component';
import { Dish2Component } from './MODULESEX/DishModule/dish/components/dish2/dish2.component';
import { ComidaComponent } from './modules/comida/components/comida/comida.component';
import { DishModule } from './MODULESEX/DishModule/dish/dish.module';
import { ProviderModule } from './MODULESEX/ProviderModule/provider/provider.module';

@NgModule({
  declarations: [
   AppComponent,
   ComidaComponent
  ],
  imports: [
    BrowserModule,
    DishModule,
    ProviderModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
