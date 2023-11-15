import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Core/Services/user.service';
import { User } from 'src/app/Models/user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  id!: number;
  user !:User;
  updateForm !: FormGroup;
  constructor(private avtR: ActivatedRoute, private userS : UserService ,private R:Router) { }

  ngOnInit(): void {
    this.getParam();
    this.userS.getUserById(this.id).subscribe((data) =>{this.user = data;
      this.updateForm = new FormGroup({
        id:new FormControl(this.user.id),
        firstName : new FormControl(this.user.firstName),
        lastName :new FormControl(this.user.lastName),
        birthDate: new FormControl(this.user.birthDate),
        email: new FormControl(this.user.email),
        password: new FormControl(this.user.password),
        profession: new FormControl(this.user.profession),
        accountCategory : new FormControl(this.user.accountCategory),
        picture : new FormControl(''),
        skills:new FormArray([new FormControl('',Validators.minLength(3)), new FormControl('', Validators.minLength(3))])
      })
    });
  }
get skills(){
    return this.updateForm.get('skills') as FormArray;
}
addskills(){
    this.skills.push(new FormControl('',Validators.minLength(3)));
}
  getParam() {
    this.avtR.paramMap.subscribe(data => {this.id = Number(data.get('id'));

    });
  }

  update(){


  this.userS.updateUser(this.updateForm.getRawValue()).subscribe(
   ()=> this.R.navigate(['/users'])
    );
  }


}
