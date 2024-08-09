import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseToArray',
  // standalone: true
})
export class ParseToArrayPipe implements PipeTransform {

  transform(value: { [key: string]: any }): { key: string, value: any }[] {
    if (!value) return [];
    return Object.keys(value).map(key => ({ key, value: value[key] }));
  }

}
