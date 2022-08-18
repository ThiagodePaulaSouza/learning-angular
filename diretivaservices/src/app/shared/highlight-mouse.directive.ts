import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlightMouse]',
})
export class HighlightMouseDirective {
  // metadado
  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = 'yellow'
  }
  @HostListener('mouseout') onMouseOut() {
    this.backgroundColor = ''
  }

  @HostBinding('style.backgroundColor') get setColor(){
    // Código Extra
    return this.backgroundColor;
  }
  private backgroundColor: string = '';

  constructor() {}

  // O mouseleave é disparado também nos elementos filhos do elemento selecionado.
  // O mouseout dispara apenas no elemento selecionado.
}
