import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  productForm: FormGroup;
  // nameControl: new FormControl();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      description: '',
      imageURL: '',
      ownerId: '',
      price: '',
      title: ''
    });
  }

/*  onEnviar(): void{
    console.log('VALOR: ', this.nameControl.value);
  }*/

  onEnviar2(): void{
    console.log('Form Group: ', this.productForm.value);
  }

}
