import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {}

  getAll(){
    return this.http.get<any[]>("http://localhost:3000/users");
  }

  getOne(id:number){
    return this.http.get<any>(`http://localhost:3000/users/${id}`);
  }

  create(user:User){
    return this.http.post<User>("http://localhost:3000/users",user);
  }

  update(id:number,user:User){
    return this.http.put<any>(`http://localhost:3000/users/${id}`,user);
  }

  delete(id:number){
    return this.http.delete<any>(`http://localhost:3000/users/${id}`);
  }
}
