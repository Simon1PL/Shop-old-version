import { Component, OnInit, Input} from '@angular/core';
import { Rower } from '../models/rower';

@Component({
  selector: 'app-rower',
  templateUrl: './rower.component.html',
  styleUrls: ['./rower.component.scss']
})

export class RowerComponent implements OnInit {
  @Input() rower: Rower;
  iloscWKoszyku = 0;

  constructor() {}

  dodaj(event: MouseEvent, ilosc: number) {
    if ((event.target as HTMLInputElement).classList.contains('disabled')) { return; }
    if (this.iloscWKoszyku + ilosc > this.rower.ilosc) {
      this.iloscWKoszyku = this.rower.ilosc;
      return;
    }
    if (this.iloscWKoszyku + ilosc < 0) {
      this.iloscWKoszyku = 0;
      return;
    }
    this.iloscWKoszyku += ilosc;
  }

  ngOnInit(): void {
  }

  cenaToString(cena: number): string {
    let result = String(cena);
    let i = 3;
    while (result.length > i) {
      result = result.slice(0, result.length - i) + ' ' + result.slice(result.length - i);
      i += 4;
    }
    return result;
  }

}
