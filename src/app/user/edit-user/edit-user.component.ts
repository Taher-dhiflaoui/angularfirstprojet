import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../Models/user";
import {UserService} from "../../Core/Services/user.service";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{
  id!:number;
  user!:User;
  updateForm=this.FormB.group({
    id:[0],
    firstName:[''],
    lastName:[''],
    birthDate:[''],
    email:[''],
    password:[''],
    profession:[''],
    accountCategory:[''],
    picture:[''],
    skills:this.FormB.array([new FormControl('',Validators.minLength(3)),new FormControl('',Validators.minLength(3))])
  });
  constructor(private userService:UserService,private actR:ActivatedRoute,private R:Router,private FormB:FormBuilder) {
  }
  getParam(){
    //this.id=Number(this.actR.snapshot.paramMap.get('id'));
    this.actR.paramMap.subscribe(data=>this.id=Number(data.get('id')));
  }
  ngOnInit() {
    this.getParam()
    this.userService.getUserById(this.id).subscribe((data)=>{this.user=data;
      this.updateForm.setValue(this.user);
      /* this.updateForm=new FormGroup({
        id:new FormControl(this.user.id),
        fn:new FormControl(this.user.firstName),
        ln:new FormControl(this.user.lastName),
        bd:new FormControl(this.user.birthDate),
        em:new FormControl(this.user.email),
        pw:new FormControl(),
        pr:new FormControl(this.user.profession),
        ac:new FormControl(this.user.accountCategory),
        pic:new FormControl(this.user.picture),
        skills:new FormArray([new FormControl(this.user.skills[0],Validators.minLength(3)),new FormControl(this.user.skills[1],Validators.minLength(3))])
      })*/
    });
  }
  get skills(){
    return this.updateForm.get('skills') as FormArray;
  }

  addSkills(){
    this.skills.push(new FormControl('',Validators.minLength(3)));
  }

  update(){
    this.userService.updateUser(this.user).subscribe(()=>this.R.navigate(['users']));
  }


}
