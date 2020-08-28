import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  public getProducts(): any [] {
    return [
      {
        description: 'aaaa',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        ownerId: 1,
        price: 12,
        title: 'tucumana'
      },
      {
        description: 'aaaa',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        ownerId: 1,
        price: 12,
        title: 'tucumana'
      },
      {
        description: 'aaaa',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        ownerId: 1,
        price: 12,
        title: 'tucumana'
      },
      {
        description: 'aaaa',
        imageUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        ownerId: 1,
        price: 12,
        title: 'tucumana'
      }
    ];
  }
}
