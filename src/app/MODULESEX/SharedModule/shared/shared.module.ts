import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Shared1Component } from '../../../MODULESEX/SharedModule/shared/components/shared1/shared1.component';
import { NgShared2Directive } from '../../../MODULESEX/SharedModule/shared/directives/ng-shared2.directive';
import { Shared3Pipe } from '../../../MODULESEX/SharedModule/shared/pipes/shared3.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Shared1Component,
    NgShared2Directive,
    Shared3Pipe
  ],
  exports: [
    Shared1Component,
    NgShared2Directive,
    Shared3Pipe
  ]
})
export class SharedModule { }