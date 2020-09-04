import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enable'
})
export class EnablePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value === "true") {
      return 'Si';
    } else {
      return 'No'
    }
  }

}