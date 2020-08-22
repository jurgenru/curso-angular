import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.css']
})
export class ComidaComponent{

  @Input() name : string;
  @Input() lastName : string;
  @Input() age : number;
  @Input() enable : boolean;

  @Input() nombre : string;
  @Input() stock : number;
  @Input() precio : number;
  @Input() tipo : string;
  @Output() comprar = new EventEmitter()

  constructor() { }

  onComprar(){
    this.comprar.emit();
  }

  getPrecio(precio: number) {
    if (this.tipo === "nacional") return this.precio + " Bs";
    if (this.tipo === "internacional") return this.precio + " $";
  }

}