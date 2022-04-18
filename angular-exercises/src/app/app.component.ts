import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Joao';
  userData = {
    email: 'Joao@email.com',
    role: 'admin',
  }
  userNumber: number = 42;
  title = 'angular-exercises';
}
