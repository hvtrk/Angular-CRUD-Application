import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Icrud } from './crud';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private _url = 'http://localhost:3000/users/retrive';

  constructor(private http: HttpClient) {  }
  getdata(): Observable<Icrud[]> {
    return this.http.get<Icrud[]>(this._url);
    // console.log(this.http.get(this._url));
  }
  // setdata()

}
