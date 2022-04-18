import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {
  poema: string = "Bom dia, todo dia é dia e todo dia é bom, logo bom dia "

  constructor() { }

  ngOnInit(): void {
  }

}
