import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilsUserComponent } from './fils-user/fils-user.component';


@NgModule({
  declarations: [ 
    AddUserComponent,
    UpdateUserComponent,
    ListUserComponent,
    FilsUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class UserModule { }
