import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
// import {FormsModule} from '@angular/forms';
// import { UserListComponent } from './user-list/user-list.component';
// import { UserDetailsComponent } from './user-details/user-details.component';
import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { GetUserComponent } from './get-user/get-user.component';

import { CrudService } from './crud.service';

@NgModule({
  declarations: [
    AppComponent,
    // UserListComponent,
    // UserDetailsComponent,
    AddUserComponent,
    EditUserComponent,
    GetUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FormsModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
