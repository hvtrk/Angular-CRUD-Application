import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public crud_users = [];
  constructor(private _crudService: CrudService) { }

  ngOnInit() {
    this._crudService.getdata().subscribe(data => this.crud_users = data);
  }

}
