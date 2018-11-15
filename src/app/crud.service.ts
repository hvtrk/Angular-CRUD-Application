import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import Crud, { } from './user';
// import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private _url = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {  }

  // Create The Data and and insert into the database through Server.
  setData(Name, Email, Age ) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    // var Options = new RequestOptions({ headers: httpOptions });
      const userData = {
        name: Name,
        email: Email,
        age: Age
      };
      console.log(userData);
    this.http.post(`${this._url}/create`, userData, httpOptions)
      .subscribe(res => console.log('Insertion Done'));
  }

  // Retrive the Data from the database through Server.
  getData() {
    return this
      .http.get(`${this._url}/retrive`);
  }

  // Edit the Users
  editUser(id) {
    return this
      .http.get(`${this._url}/edit/${id}`);
  }

  // Update the user
  updateUser(name, email, age, id) {
    const userData = {
      _id: id,
      name: name,
      email: email,
      age: age
    };
    this.http.post(`${this._url}/update/${id}`, userData)
      .subscribe(res => console.log('Update Done'));
  }

  // Delete the user
  deleteUser(id) {
    return this
      .http
      .get(`${this._url}/delete/${id}`);
  }
}
