import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ConcertService } from '../../../../services/concert.service';

@Component({
  selector: 'comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.css']
})
export class ConcComponent implements OnInit, OnDestroy{
  concert = [];

  concertForm: FormGroup;

  concertSubs: Subscription;
  concertGetSubs: Subscription;
  concertDeleteSubs: Subscription;
  concertUpdateSubs: Subscription;
  idEdit: any;

  constructor(private formBuilder: FormBuilder, private concertService: ConcertService) { }

  onComprar(){
    this.comprar.emit();
  }

  getPrecio(precio: number) {
    if (this.tipo === "nacional") return this.precio + " Bs";
    if (this.tipo === "internacional") return this.precio + " $";
  }

}