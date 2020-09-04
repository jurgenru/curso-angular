import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ConcertService } from '../../../../services/concert.service';

@Component({
  selector: 'concert',
  templateUrl: './concert.component.html',
  styleUrls: ['./concert.component.css']
})
export class ConcertComponent implements OnInit, OnDestroy{
  concert = [];

  concertForm: FormGroup;

  concertSubs: Subscription;
  concertGetSubs: Subscription;
  concertDeleteSubs: Subscription;
  concertUpdateSubs: Subscription;
  idEdit: any;

  constructor(private formBuilder: FormBuilder, private concertService: ConcertService) { }

  ngOnInit(): void {
    this.loadProduct();
    this.concertForm = this.formBuilder.group({
      name: ['', [Validators.minLength(3)]],
      stock: '',
      type: ['',[Validators.required]],
      urlImage: ''
    });
  }

  loadProduct(): void{
    this.concert = [];
    this.concertGetSubs = this.concertService.getProducts().subscribe(res => {
      Object.entries(res).map((p: any) => this.concert.push({id: p[0], ...p[1]}));
      /*console.log('Respuesta: ', res);
      console.log('Respuesta: ', Object.entries(res));
*/
    });
  }

    onEnviar(): void {
    this.concertSubs = this.concertService.addProduct(this.concertForm.value).subscribe(
      res => {
        console.log('Resp: ', res);
      },
      error => {
        console.log('ERROR DE SERVIDOR');
      }
    );
  }

  onDelete(id: any): void{
    this.concertDeleteSubs = this.concertService.deleteConcert(id).subscribe(
      res => {
        console.log('Resp: ', res);
        this.loadProduct();
      },
      err => {
        console.log('ERROR: ');
      }
    );
  }

  onEdit(concert): void{
    this.idEdit = concert.id;
    this.concertForm.patchValue(concert);
  }

  onUpdateConcert(): void{
    this.concertUpdateSubs = this.concertService.updateConcert(this.idEdit, this.concertForm.value).subscribe(
      res => {
        console.log('Resp Update: ', res);
        this.loadProduct();
      },
      err => {
        console.log('ERROR UPDATE');
      }
    );
  }

  ngOnDestroy(): void{
    this.concertSubs ? this.concertSubs.unsubscribe() : '';
    this.concertGetSubs ? this.concertGetSubs.unsubscribe() : '';
    this.concertDeleteSubs ? this.concertDeleteSubs.unsubscribe() : '';
    this.concertUpdateSubs ? this.concertUpdateSubs.unsubscribe() : '';
  }


}

