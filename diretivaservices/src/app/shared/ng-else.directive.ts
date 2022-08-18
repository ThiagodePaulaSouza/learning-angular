import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})

export class NgElseDirective {

  // escutar input toda vez que for setado/modificado
  @Input() set ngElse(condition: boolean){
    if (!condition) {
      // renderiza conteudo passado dentra da tag
      this._viewContainerRed.createEmbeddedView(this._templateRef)
    }else{
      // limpa/destroi conteudo de dentro da tag
      this._viewContainerRed.clear();
    }
  }

  constructor(private _templateRef: TemplateRef<any>, private _viewContainerRed: ViewContainerRef) { }

}
