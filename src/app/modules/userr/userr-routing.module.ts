import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user/user.component';

//'' significa que el componente que tengamos va a correr sin problemas no importa el path
const routes: Routes = [
  {path: '', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserrRoutingModule { }
