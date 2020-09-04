import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcertComponent } from './concert.component';
import { ConcertRoutingModule } from './concert-routing.module';
import { ConcertService } from '../service/concert.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    ConcertRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [ConcertComponent],
  providers: [
    ConcertService
  ]
})
export class ConcertModule { }