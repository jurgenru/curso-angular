import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserrRoutingModule } from './userr-routing.module';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserrRoutingModule
  ]
})
export class UserrModule { }
