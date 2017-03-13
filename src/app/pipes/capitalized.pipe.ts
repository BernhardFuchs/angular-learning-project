import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalized'
})
export class CapitalizedPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.split(' ')
      .map(part => part.charAt(0).toUpperCase() + part.substring(1).toLowerCase())
      .join(' ');
  }

}
