import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNgColor]'
})
export class NgColorDirective {

  /*Escuchar un evento en donde este declarado. Escucha cualquier elemento o componente donde este este elemento. EN este ejemplo vamos a escuchar lo del mouse que esta haciendo */
  @HostListener('mouseenter') onMouseEnter(){
    console.log('Mouse enter')
    this.changeCOlor('green');
  }

  @HostListener('mouseleave') onMouseLeave(){
    console.log('Mouse leave')
    this.changeCOlor('grey')
  }

  constructor(private el: ElementRef) {
    console.log('Element ref: ', el)
    this.changeCOlor('red')
  }

  changeCOlor(color:string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}