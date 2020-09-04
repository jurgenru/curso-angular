import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConcertComponent } from './concert/concert.component';

const routes: Routes = [
  {path: '', component: ConcertComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConcertRoutingModule { }