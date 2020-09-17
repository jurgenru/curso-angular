import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = environment.app.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getProducts(id: any): Observable<any> {
    return this.http.get(`${this.url}/products.json?auth=${id}`);
  }

  public getProductsById(id: any): Observable<any> {
    return this.http.get(`${this.url}/products.json?orderBy="ownerId"&equalTo="${id}"&print=pretty`);
  }

  public addProduct(product: any, id: any): Observable<any> {
    return this.http.post(`${this.url}/products.json?auth=${id}`, product);
  }

  public deleteProduct(id: any): Observable<any> {
    return this.http.delete(`${this.url}/products/${id}.json?auth=${id}`);
  }

  public updateProduct(id: any, product: any): Observable<any> {
    return this.http.put(`${this.url}/products/${id}.json?auth=${id}`, product);
  }
}
