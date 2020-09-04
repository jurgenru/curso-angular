import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConcertComponent } from './concert/concert/concert.component';

const routes: Routes = [
  {path: 'concert', component: ConcertComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }