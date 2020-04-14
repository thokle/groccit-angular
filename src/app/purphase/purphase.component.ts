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
    Types: new FormControl(),
    Url: [],
    Email: [],
    Phone: [],
    Zipcode: [],
    });
  }

   types: Types[] = [ {value: 'Kosmetik', valueView: 'Kosmetik' },
     {value: 'Sko' , valueView: 'Sko'}, {value: 'Legetøj', valueView: 'Legetøj'}];
  ngOnInit(): void {
  }

  OpretPurphase() {
   const purphase: RootObject = { testPurchase: {Zipcode: Number.parseInt(this.fc.controls.Zipcode.value, 0),
       Url: this.fc.controls.Url.value,
       Types: '', Size: '', Price: 0,
       Phone: this.fc.controls.Phone.value, Name: this.fc.controls.Name.value, Comment: '',
       Color: this.fc.controls.Color.value,
       Brand: '', City: this.fc.controls.City.value, Email: this.fc.controls.Email.value,
       Model: ''} };
   this.ps.AddPurphase(purphase).pipe().subscribe(s => { this.status = 'Tak for indsendelsen af købsintention, ' +
     'Du vil blive kontaktet af Glenn Hunnich snarest'; });
  }


}
