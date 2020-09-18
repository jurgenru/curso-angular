import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductService} from '../../shared/services/product.service';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { CardComponent } from './components/card/card.component';
import { TallaPipe } from '../../talla.pipe';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
  {path: '', component: AdminComponent}
];

@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    FormComponent,
    CardComponent,
    TallaPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    ProductService
  ],
  exports: [RouterModule]
})
export class AdminModule { }
