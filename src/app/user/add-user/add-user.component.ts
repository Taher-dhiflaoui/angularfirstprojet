import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Core/Services/user.service';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent  {
  customer:String="Customer" 
  constructor(private userS : UserService ,private r:Router){}
user:User = {

} as User;

add(F:NgForm){
  const id=new Date().getTime();
  const newUser:User={
    id: id,
    firstName: F.value.fn,
    lastName: F.value.ln,
    birthDate: F.value.date,
    accountCategory: F.value.category,
    email: F.value.email,
    password: F.value.password,
    picture: "https://bootdey.com/img/Content/avatar/avatar5.png",
    profession: F.value.Profession
  }
  this.userS.addUser(newUser).subscribe(()=>{
    alert("user added");
    this.r.navigate(["users"]);
  });
}
}
