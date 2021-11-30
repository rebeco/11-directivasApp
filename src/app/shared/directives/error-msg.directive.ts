import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[errorMsg]',
})
export class ErrorMsgDirective implements OnInit {
  htmlElement: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _mensaje: string = 'El campo es obligatorio';

  @Input() set color(valor: string) {
    // Este input setter no mantiene la propiedad, es decir, cuando se setea color, se ejecuta la función, pero no se mantiene color como propiedad. Para ello deberíamos crear una propiedad y setearla en esta función.
    if (valor) this._color = valor;
    this.setColor();
  }

  @Input() set mensaje(valor: string) {
    if (valor) this._mensaje = valor;
    this.setMensaje();
  }

  @Input() set noValido(valor: boolean) {
    if (!valor) {
      this.htmlElement.nativeElement.classList.add('hidden');
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }

  constructor(private element: ElementRef<HTMLElement>) {
    this.htmlElement = element;
  }

  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
    this.setEstilo();
  }

  setEstilo() {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor() {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje() {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }
}
