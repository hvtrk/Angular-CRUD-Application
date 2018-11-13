import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  public crud_users = [];
  // function del () {
  //   location.href = '/users/delete/<%=crud.delId%>';
  // }
  constructor(private _crudService: CrudService) { }

  ngOnInit() {
    this._crudService.getdata().subscribe(data => this.crud_users = data);
  }

}
