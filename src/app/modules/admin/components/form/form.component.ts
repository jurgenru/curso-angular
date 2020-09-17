import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../../shared/services/auth.service';
import { ProductService } from '../../../../shared/services/product.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  products = [];

  productForm: FormGroup;

  productSubs: Subscription;
  productGetSubs: Subscription;
  productDeleteSubs: Subscription;
  productUpdateSubs: Subscription;
  idEdit: any;

  // nameControl: new FormControl();

  constructor(private formBuilder: FormBuilder,
              private productService: ProductService,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.loadProduct();
    this.productForm = this.formBuilder.group({
      name:['', [Validators.minLength(3)]],
      size:'',
      stock:'',
      type:['',[Validators.required]],
      urlImage:''
    });
  }

  loadProduct(): void {
    this.products = [];
    const userId = this.authService.getUserId();
    this.productGetSubs = this.productService.getProducts().subscribe(res => {
      Object.entries(res).map((p: any) => this.products.push({id: p[0], ...p[1]}));
    });
  }

  /*  onEnviar(): void{
      console.log('VALOR: ', this.nameControl.value);
    }*/

  onEnviar2(): void {
    this.productSubs = this.productService.addProduct({
      ...this.productForm.value,
      ownerId: this.authService.getUserId()
    }).subscribe(
      res => {
        console.log('Resp: ', res);
        this.loadProduct();
      },
      error => {
        console.log('ERROR DE SERVIDOR');
      }
    );
  }

  onDelete(id: any): void {
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

  onEdit(product): void {
    this.idEdit = product.id;
    this.productForm.patchValue(product);
  }

  onUpdateProduct(): void {
    this.productUpdateSubs = this.productService.updateProduct(
      this.idEdit,
      {
        ...this.productForm.value,
        ownerId: this.authService.getUserId()
      }
    ).subscribe(
      res => {
        console.log('Resp Update: ', res);
        this.loadProduct();
      },
      err => {
        console.log('ERROR UPDATE');
      }
    );
  }

  ngOnDestroy(): void {
    this.productSubs ? this.productSubs.unsubscribe() : '';
    this.productGetSubs ? this.productGetSubs.unsubscribe() : '';
    this.productDeleteSubs ? this.productDeleteSubs.unsubscribe() : '';
    this.productUpdateSubs ? this.productUpdateSubs.unsubscribe() : '';
  }
}