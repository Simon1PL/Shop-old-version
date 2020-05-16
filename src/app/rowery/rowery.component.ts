import { Component, OnInit } from '@angular/core';
import { Rower } from '../models/rower';

@Component({
  selector: 'app-rowery',
  templateUrl: './rowery.component.html',
  styleUrls: ['./rowery.component.scss']
})

export class RoweryComponent implements OnInit {
  rowery: Rower[] = [];
  nowyRower = {nazwa: '', cena: 0, opis: [], urlZdjecia: '', ilosc: 0 };
  dodajRower = true;
  opis = '';

  constructor() { }

  ustawNazwe() {}
  ustawCene() {}
  ustawOpis() {}
  ustawUrlZdjecia() {}
  ustawIlosc() {}
  dodajModel(rower: Rower) {
    this.nowyRower.opis = this.opis.split('\n');
    console.log(this.nowyRower.opis);
    this.rowery.push(rower);
  }

  ngOnInit(): void {
    // tslint:disable-next-line: forin
    for (const numerRoweru in nazwy) {
      // tslint:disable-next-line: max-line-length
      this.rowery.push({nazwa: nazwy[numerRoweru], cena: ceny[numerRoweru], opis: opisy[numerRoweru], urlZdjecia: zdjecia[numerRoweru], ilosc: 3 });
    }
    for (let index = 0; index < 10; index++) {
      // tslint:disable-next-line: max-line-length
      this.rowery.push({nazwa: `B\'TWIN ${index + 1}`, cena: 1700, opis: stwórzOpis(index), urlZdjecia: Zdjecie, ilosc: Math.max(index - 2, 0) });
    }
  }

  kolorExtremum(rower: Rower) {
    if (rower.cena === Math.min(...this.rowery.map(rowr => rowr.cena))) {
      return 'red';
    }
    if (rower.cena === Math.max(...this.rowery.map(rowr => rowr.cena))) {
      return 'green';
    }
  }

}

// ------------------------------------------DANE ROWERÓW(STORAGE)------------------------------------------ //
const Zdjecie = 'https://skoda-wlc.s3.amazonaws.com/5/2017/10/big_3dc06ceb-e8d5-4315-b53f-ec20c6c4e607.jpg';

function stwórzOpis(nr: number): [string, string][] {
  return [['RAMA', `B\'TWIN ${nr}`],
  ['ROK', '2020'],
  ['ROZMIAR RAMY', 'XS, S, M, L'],
  ['KOLOR', 'BLACK/RED/GREEN'],
  ['WAGA', `12,${nr} kg`],
  ['WIDELEC', `SR Suntour XCT JR 2${nr} 50mm skoku`],
  ['PRZERZUTKA PRZEDNIA', 'Shimano Altus'],
  ['PRZERZUTKA TYŁ', 'Shimano Altus'],
  ['HAMULCE', `Hayes MX-${nr}`]];
}

const nazwy = ['BIG.SEVEN 200', 'BIG.SEVEN 500', 'BIG.NINE 15-D', 'BIG.NINE 300', 'BIG.NINE 700', 'BIG.NINE 4000', 'BIG.NINE 5000', 'BIG.NINE 9000', 'HEXAGON 3.0', 'HEXAGON 6.0'];

const ceny = [2999, 4499, 2099, 3799, 8499, 8999, 10499, 32999, 1649, 2099];

const zdjecia = ['https://d2lljesbicak00.cloudfront.net/merida-v2/crud-zoom-img//master/bikes/2020/BIG_SEVEN_200_grnblk_MY2020.tif?p3',
'https://d2lljesbicak00.cloudfront.net/merida-v2/crud-zoom-img//master/bikes/2020/BIG_SEVEN_500_yloblk_MY2020.tif?p3',
'https://d2lljesbicak00.cloudfront.net/merida-v2/crud-zoom-img//countries/pl-pl/big-nine/bignine15dblack.jpg?p3',
'https://d2lljesbicak00.cloudfront.net/merida-v2/crud-zoom-img//master/bikes/2020/BIG_NINE_300_bluslv_MY2020.tif?p3',
'https://d2lljesbicak00.cloudfront.net/merida-v2/crud-zoom-img//master/bikes/2020/BIG_NINE_700_gryslv_MY2020.tif?p3',
'https://d2lljesbicak00.cloudfront.net/merida-v2/crud-zoom-img//master/bikes/2020/BIG_NINE_4000_grngrn_MY2020.tif?p3',
'https://d2lljesbicak00.cloudfront.net/merida-v2/crud-zoom-img//master/bikes/2019/BIG_NINE_5000_copbrn_MY2019.tif?p3',
'https://d2lljesbicak00.cloudfront.net/merida-v2/crud-zoom-img//master/bikes/2020/BIG_NINE_9000_UDgld_MY2020.tif?p3',
'https://kross.eu/media/cache/gallery/rc/3g0nv61h/images/13/13759/hexagon_3_0_black_lime_silver_matte.png',
'https://kross.eu/media/cache/gallery/rc/bvmaovzw/images/13/13379/hexagon_6_0_black_graphite_red_matte.png'];

const opisy: [string, string][][] = [
// Rower1
[['RAMA', 'BIG.SEVEN TFS'],
['ROK', '2020'],
['ROZMIAR RAMY', 'XS, S, M, L'],
['KOLOR', 'GLOSSY GREEN (BLACK)'],
['WAGA', '13,48 kg'],
['WIDELEC', 'Suntour XCM HLO'],
['PRZERZUTKA PRZEDNIA', 'Shimano M2020-TS'],
['PRZERZUTKA TYŁ', 'Shimano Alivio Shadow'],
['OPONY', 'Maxxis Ikon'],
['TARCZE HAMULCOWE', 'Shimano RT10'],
['HAMULCE', 'Shimano MT-200']],
// Rower2
[['RAMA', 'BIG.SEVEN TFS'],
['ROK', '2020'],
['ROZMIAR RAMY', 'XS, S, M, L'],
['KOLOR', 'GLOSSY BRIGHT YELLOW (BLACK)'],
['WAGA', '12 kg'],
['WIDELEC', 'Manitou Markhor Comp'],
['PRZERZUTKA PRZEDNIA', 'Shimano Deore'],
['PRZERZUTKA TYŁ', 'Shimano Deore Shadow+'],
['OPONY', 'Maxxis Ikon'],
['TARCZE HAMULCOWE', 'Shimano RT10'],
['HAMULCE', 'Shimano MT-200']],
// Rower3
[['RAMA', 'BIG.SEVEN SPEED'],
['ROK', '2020'],
['ROZMIAR RAMY', 'S, M, L, XL, XXL'],
['KOLOR', 'METALLIC BLACK (MATT DARK SILVER)'],
['WAGA', '14,15 kg'],
['WIDELEC', 'SR Suntour XCM'],
['PRZERZUTKA PRZEDNIA', 'Shimano FD-TY700'],
['PRZERZUTKA TYŁ', 'Shimano RD-M310'],
['OPONY', 'MERIDA K1080'],
['TARCZE HAMULCOWE', 'Shimano RT10'],
['HAMULCE', 'Shimano ST-EF505']],
// Rower4
[['RAMA', 'BIG.SEVEN TFS'],
['ROK', '2020'],
['ROZMIAR RAMY', 'S, M, L, XL, XXL'],
['KOLOR', 'MATT LIGHT BLUE (GLOSSY BLUE/SILVER)'],
['WAGA', '12.93 kg'],
['WIDELEC', 'Suntour XCR LOR'],
['PRZERZUTKA PRZEDNIA', 'Shimano Deore'],
['PRZERZUTKA TYŁ', 'Shimano XT Shadow'],
['OPONY', 'Maxxis Ikon'],
['TARCZE HAMULCOWE', 'Shimano RT10'],
['HAMULCE', 'Shimano MT-200']],
// Rower5
[['RAMA', 'BIG.SEVEN LITE'],
['ROK', '2020'],
['ROZMIAR RAMY', 'S, M, L, XL, XXL'],
['KOLOR', 'DARK GREY (MATT DARK SILVER)'],
['WAGA', '11.94 kg'],
['WIDELEC', 'Manitou Markhor Comp'],
['PRZERZUTKA PRZEDNIA', ' Shimano XT'],
['PRZERZUTKA TYŁ', 'Shimano XT M8120 Shadow+'],
['OPONY', 'Maxxis Ikon'],
['TARCZE HAMULCOWE', 'Shimano RT54'],
['HAMULCE', 'Shimano XT']],
// Rower6
[['RAMA', 'BIG.SEVEN CF3'],
['ROK', '2020'],
['ROZMIAR RAMY', 'S, M, L, XL, XXL'],
['KOLOR', 'SILK GREEN (DARK GREEN)'],
['WAGA', '11,15 kg'],
['WIDELEC', 'Manitou Markhor Comp'],
['PRZERZUTKA PRZEDNIA', 'Sram NX Eagle'],
['PRZERZUTKA TYŁ', 'Sram NX Eagle'],
['OPONY', 'Maxxis Ikon'],
['TARCZE HAMULCOWE', 'Shimano RT10'],
['HAMULCE', 'Shimano MT-500']],
// Rower7
[['RAMA', 'BIG.SEVEN CF3'],
['ROK', '2020'],
['ROZMIAR RAMY', 'S, M, L, XL, XXL'],
['KOLOR', 'COPPER (BROWN-SILVER)'],
['WAGA', '11,46 kg'],
['WIDELEC', 'Manitou Markhor Comp'],
['PRZERZUTKA PRZEDNIA', 'Shimano SLX'],
['PRZERZUTKA TYŁ', 'Shimano XT Shadow+'],
['OPONY', 'Maxxis Ikon'],
['TARCZE HAMULCOWE', 'Shimano RT10'],
['HAMULCE', 'Shimano MT-500']],
// Rower8
[['RAMA', 'BIG.SEVEN CF5'],
['ROK', '2020'],
['ROZMIAR RAMY', 'S, M, L, XL, XXL'],
['KOLOR', 'MATT UD (GLOSSY GOLD)'],
['WAGA', '8,4 kg'],
['WIDELEC', 'Fox Factory 32 Float SC'],
['PRZERZUTKA PRZEDNIA', 'No info'],
['PRZERZUTKA TYŁ', ' Shimano XTR Shadow+'],
['OPONY', 'Continental Race King 2.2'],
['TARCZE HAMULCOWE', 'Shimano RT-MT900'],
['HAMULCE', 'Shimano XTR']],
// Rower9
[['RAMA', 'ALUMINIUM PERFORMANCE'],
['ROK', '2020'],
['ROZMIAR RAMY', 'XS, S, M, L'],
['KOLOR', 'BLACK+YELLOW/GREEN'],
['WAGA', '13,5 kg'],
['WIDELEC', 'KROSS'],
['PRZERZUTKA PRZEDNIA', 'SHIMANO TOURNEY TY300'],
['PRZERZUTKA TYŁ', '	SHIMANO ALTUS M310'],
['OPONY', 'MITAS OCELOT V85 27,5X2.1'],
['TARCZE HAMULCOWE', 'DISC (160)'],
['HAMULCE', 'SHIMANO EF41']],
// Rower10
[['RAMA', 'ALUMINIUM PERFORMANCE'],
['ROK', '2020'],
['ROZMIAR RAMY', 'XS, S, M, L, XL'],
['KOLOR', 'BLACK+RED'],
['WAGA', '14,5 kg'],
['WIDELEC', 'SR SUNTOUR XCM RL'],
['PRZERZUTKA PRZEDNIA', 'SHIMANO TOURNEY TY700'],
['PRZERZUTKA TYŁ', 'SHIMANO ACERA M360'],
['OPONY', 'MITAS OCELOT V85 29X2.1'],
['TARCZE HAMULCOWE', '	DISC (160)'],
['HAMULCE', 'SHIMANO MT200']]];
