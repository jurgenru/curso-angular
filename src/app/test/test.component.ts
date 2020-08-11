import { Component, OnInit, Input, Output, EventEmitter, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input()name : string;

  constructor(){

  }

  ngOnInit(){
    console.log("OnInit")
  }

  ngOnChanges(){
    console.log("OnChanges")
  }

  ngDoCheck(){
    console.log("DoCheck")
  }

  /* El primero verifica el contenido, la segunda se ejecuta despues de verificar el contenido, El tercero verifica  que se cargen las vistas, El ultimo va a verificar despues de que se cargen las vistas (Los primeros dos son para verificar el contenido, Los ultimos dos verifican la vista)*/

  ngAfterContentInit(){
    console.log("AfterContentInit")
  }

  ngAfterContentChecked(){
    console.log("AfterContentChecked")
  }

  ngAfterViewInit(){
    console.log("AfterViewInit")
  }

  ngAfterViewChecked(){
    console.log("AfterViewChecked")
  }

  ngOnDestroy(){
    console.log("OnDestroy")
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
