import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'na'
})
export class NaPipe implements PipeTransform {

  transform(value: unknown, param?: string): unknown {
    debugger;
    //checking if value is not empty or undefind or null
    if(value == '' || value == undefined || value == null) {
      if(param != undefined) {
        return param;
      } else {
        return '--';
      }
    } else {
      //if value is proper we are sending as it is
      return value;
    }
  }
}
