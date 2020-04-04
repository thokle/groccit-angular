import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  firstname = 'Fornavn';
  lastname = 'Efteranvn';
  username = 'Brugernavn';
  password = 'Adgangs kode ';
  repeat = 'Gentag Password';
  email = 'E-mail';
  zipcode = 'Post nr';
  phone = 'Mobil nr';
  city = 'By';
  opret = 'Opret bruger';
  constructor() { }

  ngOnInit(): void {
  }

}
