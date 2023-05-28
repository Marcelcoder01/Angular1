import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mipipe'
})
export class MipipePipe implements PipeTransform {

  transform(value: string): string {
    return "Ref - "+ value;
  }

}
