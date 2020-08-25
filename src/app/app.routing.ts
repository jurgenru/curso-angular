import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/*import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {AdminComponent} from './components/admin/admin.component';
import {Home1Component} from './components/home1/home1.component';
import {Home2Component} from './components/home2/home2.component';*/

const routes: Routes = [
  // el de abajo es para que por defecto este el home
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path : 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
  {path : 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule)},
  {path : 'list', loadChildren: () => import('./pages/list/list.module').then(m => m.ListModule)}
  /*{
    path: 'home',
    component: HomeComponent,
    children: [
      {path: 'home1', component: Home1Component},
      {path: 'home2', component: Home2Component}
    ]
  },
  {path: 'about', component: AboutComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'userr', loadChildren: () => import('./modules/userr/userr.module').then(m => m.UserrModule)}*/
];

/**forChild son rutas niños se colocan cuando de un padre salen sus niños subrutas de una vista
 forRoot es a nuestra aplicaion principal la ruta raiz**/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
