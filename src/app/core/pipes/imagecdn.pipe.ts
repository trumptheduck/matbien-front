import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'imagecdn'
})
export class ImagecdnPipe implements PipeTransform {

  transform(name: string, ...args: unknown[]): string {
    return environment.apiUrl+'/static/images/'+name;
  }

}
