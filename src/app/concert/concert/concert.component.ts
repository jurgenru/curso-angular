import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import { ConcertService } from '../../service/concert.service';


@Component({
  selector: 'app-concert',
  templateUrl: './concert.component.html',
  styleUrls: ['./concert.component.css']
})
export class ConcertComponent implements OnInit, OnDestroy {
  concerts = [];

  concertForm: FormGroup;

  concertSubs: Subscription;
  concertGetSubs: Subscription;
  concertDeleteSubs: Subscription;
  concertUpdateSubs: Subscription;
  idEdit: any;

  // nameControl: new FormControl();

  constructor(private formBuilder: FormBuilder, private concertService: ConcertService) {
  }

  ngOnInit(): void {
    this.loadConcert();
    this.concertForm = this.formBuilder.group({
      name: ['', [Validators.minLength(3)]],
      stock: '',
      type: ['', [Validators.required]],
      urlImage: '',
      title: ''
    });
  }

  loadConcert(): void{
    this.concerts = [];
    this.concertGetSubs = this.concertService.getConcerts().subscribe(res => {
      Object.entries(res).map((p: any) => this.concerts.push({id: p[0], ...p[1]}));
      /*console.log('Respuesta: ', res);
      console.log('Respuesta: ', Object.entries(res));
*/
    });
  }
  /*  onEnviar(): void{
      console.log('VALOR: ', this.nameControl.value);
    }*/

  onEnviar(): void {
    this.concertSubs = this.concertService.addConcert(this.concertForm.value).subscribe(
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
        this.loadConcert();
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
        this.loadConcert();
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