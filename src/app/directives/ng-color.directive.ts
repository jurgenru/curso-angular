import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNgColor]'
})
export class NgColorDirective {

  @Input('appNgColo') color:string;
  @Input() secondColor:string;

  /*Escuchar un evento en donde este declarado. Escucha cualquier elemento o componente donde este este elemento. EN este ejemplo vamos a escuchar lo del mouse que esta haciendo */
  @HostListener('mouseenter') onMouseEnter(){
    console.log('Mouse enter')
    this.changeCOlor(this.color);
  }

  @HostListener('mouseleave') onMouseLeave(){
    console.log('Mouse leave')
    //this.changeCOlor('grey')
    //this.el.nativeElement.style.backgroundColor = this.color;
    this.changeCOlor(this.secondColor);
  }

  constructor(private el: ElementRef) {
    //console.log('Element ref: ', el)
    //this.changeCOlor('red')
    //this.el.nativeElement.style.backgroundColor = this.color;
  }

  changeCOlor(color:string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}