import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { GetUserComponent } from './get-user/get-user.component';

const routes: Routes = [
    {
        path: 'create',
        component: AddUserComponent
    },
    {
        path: 'retrive/edit/:id',
        component: EditUserComponent
    },
    {
        path: 'retrive',
        component: GetUserComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
