import { Component, OnInit } from '@angular/core';
import {PurphaseService} from '../purphase.service';
import {RootObject} from '../test-purphase';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-purphase-intentions',
  templateUrl: './purphase-intentions.component.html',
  styleUrls: ['./purphase-intentions.component.scss']
})
export class PurphaseIntentionsComponent implements OnInit {

  purphases: Observable<RootObject[]>;
  constructor(private  ps: PurphaseService) { }

  ngOnInit(): void {
    this.purphases = this.ps.GetAllPurphases();
  }

}
