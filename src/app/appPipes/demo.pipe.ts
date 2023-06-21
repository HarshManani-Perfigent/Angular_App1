import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demo'
})
export class DemoPipe implements PipeTransform {

   transform(value: string, ...args: unknown[]): string {
    return value.substr(5,12) + ' Page';
  }

}
