import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlightMouse]',
})
export class HighlightMouseDirective {
  // ele é um metadado
  @HostListener('mouseenter') onMouseOver() {
    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color',
      'yellow'
    );
  }
  @HostListener('mouseout') onMouseOut() {
    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color',
      ''
    );
  }

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {}

  // O mouseleave é disparado também nos elementos filhos do elemento selecionado.
  // O mouseout dispara apenas no elemento selecionado.
}
