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

  products = [];

  productForm: FormGroup;

  productSubs: Subscription;
  productGetSubs: Subscription;
  productDeleteSubs: Subscription;
  productUpdateSubs: Subscription;
  idEdit: any;

  constructor(private formBuilder: FormBuilder, private productService: ConcertService) {
  }

  ngOnInit(): void {
    this.loadProduct();
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.minLength(3)]],
      stock: '',
      enable: ['',[Validators.required]],
      imageUrl: '',
    });
  }

  loadProduct(): void{
    this.products = [];
    this.productGetSubs = this.productService.getProducts().subscribe(res => {
      Object.entries(res).map((p: any) => this.products.push({id: p[0], ...p[1]}));
    });
  }

  onEnviar2(): void {
    this.productSubs = this.productService.addProduct(this.productForm.value).subscribe(
      res => {
        console.log('Resp: ', res);
      },
      error => {
        console.log('ERROR DE SERVIDOR');
      }
    );
  }

  onDelete(id: any): void{
    this.productDeleteSubs = this.productService.deleteProduct(id).subscribe(
      res => {
        console.log('Resp: ', res);
        this.loadProduct();
      },
      err => {
        console.log('ERROR: ');
      }
    );
  }

  onEdit(product): void{
    this.idEdit = product.id;
    this.productForm.patchValue(product);
  }

  onUpdateProduct(): void{
    this.productUpdateSubs = this.productService.updateProduct(this.idEdit, this.productForm.value).subscribe(
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
    this.productSubs ? this.productSubs.unsubscribe() : '';
    this.productGetSubs ? this.productGetSubs.unsubscribe() : '';
    this.productDeleteSubs ? this.productDeleteSubs.unsubscribe() : '';
    this.productUpdateSubs ? this.productUpdateSubs.unsubscribe() : '';
  }
}