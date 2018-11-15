import { Component, OnInit } from '@angular/core';
import Cruds from '../Crud';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {

  cruds: Cruds[];

  constructor(private cs: CrudService) { }

  ngOnInit() {
    this.cs
      .getData()
      .subscribe((data: Cruds[]) => {
        this.cruds = data;
      });
  }

  deleteUser(id) {
    this.cs.deleteUser(id).subscribe(res => {
      console.log('Deleted');
    });
  }

}

