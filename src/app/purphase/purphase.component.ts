import { Component, OnInit } from '@angular/core';
import {Types} from '../../types';
@Component({
  selector: 'app-purphase',
  templateUrl: './purphase.component.html',
  styleUrls: ['./purphase.component.scss']
})

export class PurphaseComponent implements OnInit {
 brand = 'Mærke';
 url = 'Url';
 price = 'price';
 city = 'By';
zipcode = 'Post nr.';
name = 'Fulde navn';
phone = 'Tlf nr';
create = 'Opret';
  constructor() { }

   types: Types[] = [{value: 'Tøj', valueView: 'Tøj' }, {value: 'Kosmetik', valueView: 'Kosmetik' }, {value: 'Sko' , valueView: 'Sko'}];
  ngOnInit(): void {
  }

}
