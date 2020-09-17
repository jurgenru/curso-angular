import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../../../shared/services/product.service';
 
 
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnDestroy {
 
  products=[];

  calor=[];
  frio=[];
  productFormm : FormGroup;
  //nameControl = new FormControl();
 
  productSubs: Subscription;
  productGetSubs: Subscription;
  productDeleteSubs: Subscription;
  productUpdateSubs: Subscription;
  idEdit: any;
 
  constructor(private productService: ProductService, private formBuilder: FormBuilder) {}
 
  ngOnInit() {
    this.loadProduct();
     this.productFormm = this.formBuilder.group({
      name:['', [Validators.minLength(3)]],
      size:'',
      stock:'',
      type:['',[Validators.required]],
      urlImage:''
    })
  } 
 
  loadProduct(): void {
    this.products = [];
    this.productGetSubs = this.productService.getProducts().subscribe(res => {
      Object.entries(res).map((p: any) => this.products.push({id: p[0], ...p[1]}));
      this.frio = this.products.filter(s => s.type === 'frio');
      this.calor = this.products.filter(s => s.type === 'calor');
    });
  }
 
  onDelete(id: any): void {
   this.productDeleteSubs = this.productService.deleteProduct(id).subscribe(
      res => {
        console.log('RESPONSE: ', res);
        this.loadProduct();
      },
      err => {
        console.log('ERROR: ');
      }
    );
  }
 
  onEdit(product): void {
    this.idEdit = product.id;
    this.productFormm.patchValue(product);
  }
 
  onUpdateProduct(): void {
    this.productUpdateSubs = this.productService.updateProduct(this.idEdit, this.productFormm.value).subscribe(
      res => {
        console.log('RESP UPDATE: ', res);
        this.loadProduct();
      },
      err => {
        console.log('ERROR UPDATE DE SERVIDOR');
      }
    );
  }
 
  onEnviar2(){
    this.loadProduct();
    console.log('Form group: ',this.productFormm.value);
    this.productSubs = this.productService.addProduct(this.productFormm.value).subscribe(
      res => {console.log('Resp: ', res)}, err =>{
        console.log('Error de servidor')
      })
  }
 
  ngOnDestroy(){
    this.productSubs ? this.productSubs.unsubscribe():''; 
    this.productGetSubs ? this.productGetSubs.unsubscribe():'';
    this.productDeleteSubs ? this.productDeleteSubs.unsubscribe():'';
    this.productUpdateSubs ? this.productUpdateSubs.unsubscribe():'';
    }

    
 
}