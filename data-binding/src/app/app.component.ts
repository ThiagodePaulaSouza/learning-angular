import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cursoAngular: boolean = true;

  urlImage: string = 'http://lorempixel.com.br/500/400/?1'

  teste:boolean = false;

  getValor() {
    
    return 12
  }

}
