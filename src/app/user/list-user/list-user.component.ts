import { Component } from '@angular/core';
import {User} from "../../Models/user";
import {Router} from "@angular/router";
import {UserService} from "../../Core/Services/user.service";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {

  constructor(private Router:Router,private userservice:UserService) {
  }
  list:User[]=[];

 search!:string;

  protected readonly User = User;

  /*delete(i :number){
    this.list.splice(i, 1);

  }*/

  delete(i :number){
    this.userservice.deleteUser(i).subscribe(()=>{
      alert("user deleted");
      this.Router.navigate(["users"]);
    });

  }

  ngOnInit(){
    this.userservice.getAllUsers().subscribe((data:User[])=>this.list=data);
  }


  add(){
    this.Router.navigate(["users/adduser"]);
  }
}

