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

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MipipePipe,
    ExpoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PersonaModule,
    ProductoModule,
    AdminModule,
    UserModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }