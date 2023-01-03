import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  arr = []

  transform(value: string, ...args: unknown[]): unknown {
    const valueSplit = value.split('');
    let result = valueSplit.splice(valueSplit.length - 3, valueSplit.length).join('');
    valueSplit.forEach(item => {
      result = '*' + result;
    })
    return result;
  }

}
