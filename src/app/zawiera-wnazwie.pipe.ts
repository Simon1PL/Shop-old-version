import { Pipe, PipeTransform } from '@angular/core';
import { Rower } from './models/rower';

@Pipe({
  name: 'zawieraWNazwie'
})
export class ZawieraWNazwiePipe implements PipeTransform {

  transform(rowery: Rower[], arg: string): Rower[] {
    return arg === '' ? rowery : (rowery.filter(rower => rower.nazwa.toLowerCase().includes(arg.toLowerCase())));
  }

}
