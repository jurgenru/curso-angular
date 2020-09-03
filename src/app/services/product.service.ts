import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<any> {
    return this.http.get('https://angularcoursee.firebaseio.com/products.json');
  }
  public addProduct(product: any): Observable<any> {
    return this.http.post('https://angularcoursee.firebaseio.com/products.json', product);
  }
  public deleteProduct(id: any): Observable<any>{
    return this.http.delete(`https://angularcoursee.firebaseio.com/products/${id}.json`);
  }
}
