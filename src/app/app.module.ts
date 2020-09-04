import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Dish1Component } from './MODULESEX/DishModule/dish/components/dish1/dish1.component';
import { Dish2Component } from './MODULESEX/DishModule/dish/components/dish2/dish2.component';
import { DishModule } from './MODULESEX/DishModule/dish/dish.module';
import { ProviderModule } from './MODULESEX/ProviderModule/provider/provider.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
   AppComponent
  ],
  imports: [
    BrowserModule,
    DishModule,
    ProviderModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,
    MatSliderModule,
    MatIconModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
