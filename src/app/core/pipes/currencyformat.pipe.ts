import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyformat'
})
export class CurrencyformatPipe implements PipeTransform {

  transform(value: number, ...args: any[]): string {
    let result = '';
    let number = value;
    while(number > 0) {
      const diff = number%1000;
      number = Math.floor(number/1000);
      let string = diff.toString();
      let len = 3- string.length;
      if (number > 0) for(let i = 0; i < len; i++) {
        string = "0" + string;
      }
      result = string + result;
      if (number > 0) result = "," + result;
    }
    return result;
  }
}
