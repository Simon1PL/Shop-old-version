import { Component, OnInit, Input} from '@angular/core';
import { Rower } from '../models/rower';

@Component({
  selector: 'app-rower',
  templateUrl: './rower.component.html',
  styleUrls: ['./rower.component.css']
})

export class RowerComponent implements OnInit {
  @Input() rower: Rower;
  ilosc: number;

  constructor() {
      this.ilosc = 0;
    }

  ngOnInit(): void {
  }

}
