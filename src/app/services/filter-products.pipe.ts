import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

// declare var _: any;

@Pipe({
  name: 'filterProducts',
  pure: false
})
export class FilterProductsPipe implements PipeTransform {

  transform(items: any[], args: any[]): any {
    return _.uniqBy(items, args);
  }
}
