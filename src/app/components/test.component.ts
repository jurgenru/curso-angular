import { Component, OnInit, Input, Output, EventEmitter, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChange } from '@angular/core';

/*Otro template 
<!-- <p>Input/Output</p>
<p>Entrada Name: {{name}}</p>
<p>Entrada Age: {{age}}</p>
<p>Entrada Descripcion: {{description}}</p>

<button (click)="onClickSave()">Save</button>

<input type="text" [(ngModel)]="name">

<p>User: {{user}}</p>-->
*/

@Component({
  selector: 'app-test',
  template: `
  <div style = "border: 1px solid red">
  <p>Name: {{name}}</p>
  <p>LastName: {{lastName}}</p>
  </div>
  `,
  styles: [
  `
  
  `
  ]
})
export class TestComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

//@Input() name:string;

intermediaria : string;

  @Input()
    get name(){
      return this.intermediaria;
    }
    set name(name:string){
      this.intermediaria = 'AAAA ' + name;
    }

  constructor(){

  }

  ngOnInit(){
  //  console.log("OnInit")
  }
/  @Input() lastName: string;

  ngOnChanges(changes: SimpleChange){
    if (changes && changes.lastName && changes.lastName.currentValue){
      console.log("On changes", changes.lastName.currentValue);
      const aux = 'AAAAAAAAAAAAAA ' + changes.lastName.currentValue;
      this.lastName = aux; 
    }
  }

  ngDoCheck(){
    //console.log("DoCheck")
  }

  /* El primero verifica el contenido, la segunda se ejecuta despues de verificar el contenido, El tercero verifica  que se cargen las vistas, El ultimo va a verificar despues de que se cargen las vistas (Los primeros dos son para verificar el contenido, Los ultimos dos verifican la vista)*/

  ngAfterContentInit(){
    //console.log("AfterContentInit")
  }

  ngAfterContentChecked(){
    //console.log("AfterContentChecked")
  }

  ngAfterViewInit(){
    //console.log("AfterViewInit")
  }

  ngAfterViewChecked(){
    //console.log("AfterViewChecked")
  }

  ngOnDestroy(){
    //console.log("OnDestroy")
  }

/*
  @Input() name : string;
  @Input() age : number;
  @Input() description : string;

  @Output() clickSave = new EventEmitter();

  user:string = "maria";

  constructor() {

  }

  ngOnChanges(){

  }

  ngOnInit() {

  }

  onClickSave(){
    this.clickSave.emit({
      name: this.name,
      age: this.age,
      description: this.description
    })
  }
*/

}