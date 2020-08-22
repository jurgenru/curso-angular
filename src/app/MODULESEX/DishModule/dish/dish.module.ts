import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dish1Component } from '../../../MODULESEX/DishModule/dish/components/dish1/dish1.component';
import { Dish2Component } from '../../../MODULESEX/DishModule/dish/components/dish2/dish2.component';
import { SharedModule } from '../../../MODULESEX/SharedModule/shared/shared.module';
import { ClientModule } from '../../../MODULESEX/ClientModule/client/client.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ClientModule
  ],
  declarations: [
    Dish1Component,
    Dish2Component
  ],
  exports: [
    Dish1Component,
    Dish2Component
  ]
})
export class DishModule { }