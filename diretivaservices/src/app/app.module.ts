import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DiretivaNgstyleComponent } from './diretiva-ngstyle/diretiva-ngstyle.component';
import { ContentComponent } from './content/content.component';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { DiretivaCustomizadaComponent } from './diretiva-customizada/diretiva-customizada.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgstyleComponent,
    ContentComponent,
    FundoAmareloDirective,
    DiretivaCustomizadaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
