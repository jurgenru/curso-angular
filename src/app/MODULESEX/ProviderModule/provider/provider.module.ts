import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Provider1Component } from '../../../MODULESEX/ProviderModule/provider/components/provider1/provider1.component';
import { Provider2Component } from '../../../MODULESEX/ProviderModule/provider/components/provider2/provider2.component';
import { SharedModule } from '../../../MODULESEX/SharedModule/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    Provider1Component,
    Provider2Component
  ],
  exports: [
    Provider1Component,
    Provider2Component
  ]
})
export class ProviderModule { }