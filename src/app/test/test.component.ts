import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnChanges, OnInit {

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


}
