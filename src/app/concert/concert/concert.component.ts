import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import { ConcertService } from '../../services/concert.service';

@Component({
  selector: 'app-concert',
  templateUrl: './concert.component.html',
  styleUrls: ['./concert.component.css']
})
export class ConcertComponent implements OnInit, OnDestroy {

   concertForm : FormGroup;
  concerts = [];

  nacional = [];
  internacional = [];

  idEdit:string;
  conCreate: Subscription;
  conDelete: Subscription;
  conAdd: Subscription;
  conUpdate: Subscription;

 constructor(private formBuilder: FormBuilder,
    private concertService: ConcertService) { }

  ngOnInit() {
    this.loadConcerts();
    this.concertForm = this.formBuilder.group({
      enable:null,
      name:['',[Validators.required, Validators.minLength(3)]],
      stock:'',
      type: ['',[Validators.required]],
      urlImage:''
    });
  }

  
  loadConcerts(): void {
    this.concerts = [];
    this.conCreate = this.concertService.getConcerts().subscribe(res => {
      Object.entries(res).map((c:any) => this.concerts.push({id: c[0], ...c[1]}));
      this.nacional = this.concerts.filter(s => s.type === 'nacional');
      this.internacional = this.concerts.filter(s => s.type === 'internacional');

    })
  }

  onDelete(id: any) :void{
    this.conDelete = this.concertService.deleteConcert(id).subscribe(res => {
      this.loadConcerts();
    });
  }

  onAdd():void{
    this.conAdd = this.concertService.addConcert(this.concertForm.value).subscribe(res => {
      this.loadConcerts();
      },
      err => {
        console.log('ERROR DE SERVIDOR');
      }
    );
  }

  onUpdate():void{
    this.conUpdate = this.concertService.updateProducts(this.idEdit, this.concertForm.value).subscribe(res => {
      this.loadConcerts();
      },
      err => {
        console.log('ERROR DE SERVIDOR');
      }
    );
  }

  onEdit(concert):void {
    this.concertForm.patchValue({

      enable: concert.enable,
      name: concert.name,
      stock: concert.stock,
      type: concert.type,
      urlImage: concert.urlImage

    });

    this.idEdit = concert.id;

  }

}