import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../crud.service';
import Cruds from '../Crud';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  angForm: FormGroup;
  cruds: Cruds;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bs: CrudService,
    private fb: FormBuilder) {
    this.createForm();
    // console.log(this.cruds.name);

  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      age: ['', Validators.required]
    });
  }

  ngOnInit() {
    console.log('this');
    this.route.params.subscribe(params => {
      this.bs.editUser(params['id'])
        .subscribe((data: Cruds) => {
          this.cruds = data;
          // name = this.cruds.name;
          });
    });
  }

  updateUser(name, email, age) {
    this.route.params.subscribe(params => {
      this.bs.updateUser(name, email, age, params['id']);
      this.router.navigate(['retrive']);
    });
  }
}
