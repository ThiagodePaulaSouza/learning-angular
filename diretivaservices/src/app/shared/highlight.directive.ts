import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.hightlightColor
  }
  @HostListener('mouseout') onMouseOut() {
    this.backgroundColor = this.defaultColor
  }

  // associa variavel a uma propriedade do elemento hospedeiro
  @HostBinding('style.backgroundColor') backgroundColor: string = '';

  @Input() defaultColor: string= 'white'
  // inputpropertie com o mesmo nome de diretiva
  @Input('highlight') hightlightColor: string = 'yellow'
  constructor() { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }

}
