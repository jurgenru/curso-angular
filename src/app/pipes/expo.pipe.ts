import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expo'
  /*Un pipe puro es true. E impuro es false*/
})
export class ExpoPipe implements PipeTransform {

  transform(value: any, exponent?: any, aux1?: string): any {
    return aux1 + ' ' + Math.pow(value, isNaN(exponent) ? 1 : exponent);
  }

}