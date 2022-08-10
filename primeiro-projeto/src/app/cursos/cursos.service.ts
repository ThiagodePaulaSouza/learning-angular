import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {


  constructor() { }

  getCursos(){
    return ['React', 'Angular', 'C#', 'Java', 'Python']
  }
}
