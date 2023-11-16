import { Component } from '@angular/core';
import {UserService} from "../../Core/Services/user.service";
import {User} from "../../Models/user";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
  constructor(private Router:Router,private userservice:UserService,private r:Router) {
  }

  customer: string = "Customer";

  user:User={

  } as User

  /*add(){
    this.userservice.addUser(this.user).subscribe(()=> {
      alert("user added");
      this.r.navigate(["users"]);
    });
  }*/
  add(F:NgForm){
    const id=new Date().getTime();
    const newUser:User={
      id: id,
      firstName: F.value.fn,
      lastName: F.value.ln,
      birthDate: F.value.bd,
      accountCategory: F.value.cc,
      email: F.value.em,
      password: F.value.pw,
      picture: "https://bootdey.com/img/Content/avatar/avatar5.png",
      profession: F.value.pf,
      skills: F.value.sk
    }
    this.userservice.addUser(newUser).subscribe(()=>{
      alert("user added");
      this.Router.navigate(["users"]);
    });
  }
}
