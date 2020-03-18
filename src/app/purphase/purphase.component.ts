import { Component, OnInit } from '@angular/core';
import {Types} from '../../types';
import {PurphaseService} from '../purphase.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

import {RootObject} from '../test-purphase';
@Component({
  selector: 'app-purphase',
  templateUrl: './purphase.component.html',
  styleUrls: ['./purphase.component.scss']
})

export class PurphaseComponent implements OnInit {
 brand = 'Mærke';
 url = 'Url';
 price = 'Pris set på internettet';
 city = 'By';
zipcode = 'Post nr.';
name = 'Fulde navn';
phone = 'Tlf nr';
create = 'Opret';
color = 'Farve';
comment = 'Kommentar';
  email = 'E-mail';
  status = '';
  model = 'Model'
  size = 'Størrelse'
  type: FormControl;
fc: FormGroup;
  constructor(private  ps: PurphaseService, private  fb: FormBuilder) {
    this.fc = fb.group({
      Brand: [],
    Types: new FormControl(),
    Price: [],
    Url: [],
    Comment: [],
    Name: [],
    Email: [],
    Phone: [],
    City: [],
    Zipcode: [],
    Color: [],
    Size: [],
      Model: []
    });
  }

   types: Types[] = [{value: 'Tøj', valueView: 'Tøj' }, {value: 'Kosmetik', valueView: 'Kosmetik' },
     {value: 'Sko' , valueView: 'Sko'}, {value: 'Børnetøj', valueView: 'Børnetøj'}];
  ngOnInit(): void {
  }

  OpretPurphase() {
   const purphase: RootObject = { testPurchase: {Zipcode: Number.parseInt(this.fc.controls.Zipcode.value, 0),
       Url: this.fc.controls.Url.value,
       Types: this.fc.controls.Types.value, Size: this.fc.controls.Size.value, Price: Number.parseInt(this.fc.controls.Price.value, 2),
       Phone: this.fc.controls.Phone.value, Name: this.fc.controls.Name.value, Comment: this.fc.controls.Comment.value,
       Color: this.fc.controls.Color.value,
       Brand: this.fc.controls.Brand.value, City: this.fc.controls.City.value, Email: this.fc.controls.Email.value,
       Model: this.fc.controls.Model.value} };
   this.ps.AddPurphase(purphase).pipe().subscribe(s => { this.status = 'Tak for indsendelsen af købsintention, ' +
     'Du vil blive kontaktet af Glenn Hunnich snarest'; });
  }


}
