import {Component, OnInit, OnDestroy} from '@angular/core';
import {ProductService} from '../../shared/services/product.service';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {AddProduct} from './store/home.actions';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  productSubs: Subscription;

  products = [];

  constructor(public productService: ProductService, private store: Store<any>) {

  }

  ngOnInit(): void {
    this.productSubs = this.productService.getProducts().subscribe(res => {
      console.log('Respuesta: ', res);
      console.log('Respuesta: ', Object.entries(res));

      Object.entries(res).map(p => this.products.push(p[1]));
    });
  }

  ngOnDestroy(): void {
    this.productSubs ? this.productSubs.unsubscribe() : '';
  }

  onComprar(product): void {
    this.store.dispatch(AddProduct({product: product}));
  }

}
