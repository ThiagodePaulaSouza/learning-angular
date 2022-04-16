import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: string = "Thiago";
  age: number = 30; 
  job = "Programador";
  hobbies = ["Correr", "jogar rpg", "jogar lol", "estudar"]
  carro = {
    nome: "Simmus",
    marca: "Toyota",
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
