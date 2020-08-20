import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.css']
})
export class ComidaComponent implements OnInit {

  @Input() name : string;
  @Input() lastName : string;
  @Input() age : number;
  @Input() enable : boolean;

  @Input() nombre : string;
  @Input() stock : number;
  @Input() precio : number;
  @Input() tipo : string;

  constructor() { }

  ngOnInit() {
  }

}