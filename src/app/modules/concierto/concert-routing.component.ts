import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConcertModule } from './concert.module';

const routes: Routes = [
  {path: '', component: ConcertModule}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }