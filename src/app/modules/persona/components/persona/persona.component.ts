import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

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