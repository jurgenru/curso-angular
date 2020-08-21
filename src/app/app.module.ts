import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './components/test.component';
import { FormsModule } from '@angular/forms';
import { PersonaModule } from './modules/persona/persona.module';
import { ProductoModule } from './modules/producto/producto.module';
import { AdminModule } from './modules/admin/admin.module';
import { UserModule } from './modules/user/user.module';
import { MipipePipe } from './pipes/mipipe.pipe';
import { ExpoPipe } from './pipes/expo.pipe';
import { PurePipe } from './pipes/pure.pipe';
import { ImpurePipe } from './pipes/impure.pipe';
import { NgColorDirective } from './directives/ng-color.directive';
import { NgFocusDirective } from './directives/ng-focus.directive';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import {AppRouting} from './app.routing';
import { Home1Component } from './components/home1/home1.component';
import { Home2Component } from './components/home2/home2.component';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MipipePipe,
    ExpoPipe,
    PurePipe,
    ImpurePipe,
    NgColorDirective,
    NgFocusDirective,
    HomeComponent,
    AboutComponent,
    AdminComponent,
    Home1Component,
    Home2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PersonaModule,
    ProductoModule,
    AdminModule,
    UserModule,
    AppRouting
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
