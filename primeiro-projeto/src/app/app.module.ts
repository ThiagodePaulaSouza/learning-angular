import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursosModule } from './cursos/cursos.module';
import { MeuPrimeiroComponent } from "./meu-primeiro/meu-primeiro.component";
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { TesteModule } from './teste/teste.module';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component
  ],
  imports: [
    BrowserModule,
    CursosModule,
    TesteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
