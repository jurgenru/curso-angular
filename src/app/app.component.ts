import { Component } from '@angular/core';
import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  restaurants = [
  {nombre : "khao soi", stock:1, precio : 20, tipo : "internacional"},
  {nombre : "sajta ", stock: 2, precio : 42, tipo : "nacional"},
  {nombre : "semla ", stock: 0, precio : 52, tipo : "internacional"},
  {nombre : "silpancho", stock: 45, precio : 5, tipo : "nacional"},
  {nombre : "pulao", stock: 20, precio : 41, tipo : "internacional"},
  {nombre : "saice ", stock: 1, precio : 7, tipo : "nacional"},
  {nombre : "poutine", stock: 4, precio : 10, tipo : "internacional"},
  {nombre : "chicharron", stock: 0, precio : 4, tipo : "nacional"},
  {nombre : "fricase ", stock: 33, precio : 47, tipo : "nacional"},
  {nombre : "sushi", stock: 75, precio : 5, tipo : "internacional"},
  ];   

 comida = {
    nacional : this.restaurants.filter(p => p.tipo === 'nacional'),
    internacional : this.restaurants.filter(p => p.tipo === 'internacional')
  }

  getTotalStock(){
    const totalNacional = this.comida.nacional.map(p => p.stock).reduce((a, p) => a + p);
    const totaInternacional = this.comida.internacional.map(p => p.stock).reduce((a, p) => a + p);
    return (totalNacional + totaInternacional);
  }

  comprar(restaurant, tipo){
    const index = this.comida[tipo].findIndex(p => p === restaurant);
    this.comida[tipo][index].stock = this.comida[tipo][index].stock - 1;
  }
}