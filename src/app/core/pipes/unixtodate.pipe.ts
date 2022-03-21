import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unixtodate'
})
export class UnixtodatePipe implements PipeTransform {

  transform(unix: string, ...args: unknown[]): string {
    var date = new Date(parseInt(unix));
    return (date.getUTCDate() + 1) + "/" + (date.getUTCMonth() + 1) + "/" + date.getFullYear();
  }

}
