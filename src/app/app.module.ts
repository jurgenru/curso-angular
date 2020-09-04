import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { AppRouting } from './app-routing.module';
import { ConcertComponent } from './concert/concert/concert.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
   AppComponent,
   ConcertComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRouting,
    NgbModule,

    MatSliderModule,
    MatIconModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
