import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miPipe'
})
export class MiPipePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    let results = value.replace("blond", "Rubio")
    return results;
  }

}
