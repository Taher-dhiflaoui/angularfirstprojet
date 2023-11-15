import { Injectable } from '@angular/core';
import { User } from 'src/app/Models/user';
import{HttpClient, HttpClientModule} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

 url ="http://localhost:3000/users"
 
  constructor(private http:HttpClient) { 
   
  }


  getAllUsers(){
    return this.http.get<User[]>(this.url);
  }



  getUserById(id:number){
    return this.http.get<User>(this.url+'/'+id);
  }

  addUser(u:User){
    return this.http.post(this.url,u);
  }

  updateUser(u:User){
    let id : number=u.id;

    return this.http.post(this.url +'/'+ id,u);
  }

  deleteUser(id:number){
    return this.http.delete(this.url+'/'+ id);
  }
}
