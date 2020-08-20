import { Component, OnInit } from '@angular/core';
import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'curso-angular';

  sw = true;

  personas = ['pablo', 'juan', 'maria'];

  aux = 2;

  auxColor = 'red';

  auxClass = true;

  auxNumber: number;
  auxExponent: number;

  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  lastName = 'ruegenberg';

  persons = [
    {
      name : 'asdsad',
      lastName : 'jurge',
      age : 21,
      enable : true
    },
    {
      name : 'andres',
      lastName : 'andres',
      age : 21,
      enable : false
    },
    {
      name : 'felipe',
      lastName : 'felipe',
      age : 21,
      enable : true
    },
    {
      name : 'maria',
      lastName : 'maria',
      age : 21,
      enable : false
    }
  ];

  ngOnInit(){
    /*
    funcion flecha o arrow function
    si no ponemos parametros solo se ponen los (), si ponemos tenemos que poner todo lo necesario
    () => 'hola' es igual que la funcion de abajo

    function hola(){
      return 'hola';
    }

    (s) => (
      const b = b * 2
      return b
    )

    funcion finding index su nombre dice todo

    const aux = [1,2,3,4,5,6]

    const index = aux.findIndex(s => s === 3);
    console.log(index) en este caso devolveria la posicion 2 por que es la posicion en la que se encuentra el 3.

    const par = aux.filter(s => s%2 === 0);
    console.log('pares: ',par) aqui nos devuelve los pares de nuestro array aux

    operador map (recorre el array y nos devuelve otro)

    const mult = aux.map(s => s*2)
    console.log('map: ',mult) nos devuelve cada uno de aux multiplicado por 2

    operador sort ordena

    console.log('sort: ', aux.sort())

    operador spread se puede recorrer un array sin hacer elementos por elemento y es como si copiara el otro array y le aumenta lo que nosotros le digamos.

    const aux1 = [100, 21, ... aux];
    console.log('spread: ', aux1)

    const aux2 = {
      name: 'jurgen',
      lastname: 'ruegenberg'
    };

    const aux3 = [address: 'irpavi 2', ...aux2]
    console.log('spread1: ', aux3)

    operador destructuring desustructura alguna estructura que tengamos ya sea en json y asiganarla a variables

    const persona = {
      data : {
        name : 'jürgen',
        responses : []
      },
      address : {
        n : 1,
        extra : 'aaa'
      }
    }

    const {data, address} = persona
    console.log('data: ', data)
    console.log('address: ', address) esto es igual a usar lo de abajo

    data = persona.data;
    address = persona.address;

    variables let trabajan en el contexto donde se lo define

    for(let i = 0; i < aux.length; i++){
      console.log('a', i)
    }

    if simplificado

    if(2>1){
      return 'si'
    } else {
      return 'no'
    }

    2 > 1 ? 'si' : 'no';

    const array = from([1,2,3,4,5,6]);
    array.subscribe(s => console.log('item:', s))

    const aux = fromEvent(document, 'mousemove');

    //aux.subscribe(s => console.log('event: ', s.clientX + ', ' + s.clientY));
    */
    console.log('PURA: ', this.pura(6, 2));
    console.log('IMPURA: ', this.impura(6, 2));
  }

  /*Funcion PURA es porque la entrada tiene que ser la misma que la salida y viceversa. tiene una salida unica dependiendo de sus entradas no puede ser diferente*/

  // tslint:disable-next-line:typedef
  pura(a: number, b: number){
    return a + b;
  }

  /*Funcion IMPURA no podemos saber la salida exacta que va a tener y no podemos saber que va a devolver cual va a ser su salida, no se puede predecir la salida porque existe algo adentro que no se sabe que va adevolver*/
  impura(a: number, b: number){
    return a + b + Math.random();
  }

  /*Esto es para lo de los nombres*/
  clickSaveChild(event){
    console.log('EVENT CHILD: ', event);
  }

  changesName(){
    this.name = 'maria';
  }
}
