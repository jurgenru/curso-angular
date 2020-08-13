import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//aqui le cambie el nombre de la carpeta antes decia test de como lo creamos la primera vez con el profesor
import { TestComponent } from './components/test.component';
import { FormsModule } from '@angular/forms';
import { PersonaModule } from './modules/persona/persona.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PersonaModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }