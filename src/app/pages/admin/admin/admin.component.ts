import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {ProductService} from '../../../services/product.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {
  products = [];

  productSubs: Subscription;
  productGetSubs: Subscription;

  productForm: FormGroup;

  // nameControl: new FormControl();

  constructor(private formBuilder: FormBuilder, private productService: ProductService) {
  }

  ngOnInit(): void {
    this.loadProduct();
    this.productForm = this.formBuilder.group({
      description: ['', [Validators.required, Validators.minLength(3)]],
      imageURL: '',
      ownerId: '',
      price: '',
      title: ''
    });
  }

  loadProduct(): void{
    this.products = [];
    this.productGetSubs = this.productService.getProducts().subscribe(res => {
      Object.entries(res).map((p: any) => this.products.push({id: p[0], ...p[1]}));
      /*console.log('Respuesta: ', res);
      console.log('Respuesta: ', Object.entries(res));
*/
    });
  }
  /*  onEnviar(): void{
      console.log('VALOR: ', this.nameControl.value);
    }*/

  onEnviar2(): void {
    console.log('Form Group: ', this.productForm.value);

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
    this.productService.deleteProduct(id).subscribe(
      res => {
        console.log('Resp: ', res);
        this.loadProduct();
      },
      err => {
        console.log('ERROR: ');
      }
    );
  }

  ngOnDestroy(): void{
    this.productSubs ? this.productSubs.unsubscribe() : '';
    this.productGetSubs ? this.productGetSubs.unsubscribe() : '';
  }
}
