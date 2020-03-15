import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {RootObject, TestPurchase} from './test-purphase';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PurphaseService {

  baseurl = environment.url;

  constructor(private  http: HttpClient) {
  }

  public AddPurphase(body: RootObject): Observable<any> {
    const url = this.baseurl + '/purphase';
    console.log(JSON.stringify(body));
    return this.http.post( url, JSON.stringify(body),
      {reportProgress: true, headers: new HttpHeaders().set('Content-Type', 'application/json')}).pipe();
  }
  public GetAllPurphases(): Observable<RootObject[]> {

    const url = this.baseurl + '/all';
    return  this.http.get<RootObject[]>(url).pipe();
  }
}
