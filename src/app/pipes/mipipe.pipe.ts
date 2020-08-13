import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mipipe'
})
export class MipipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return 'hi ' + value;
  }
}