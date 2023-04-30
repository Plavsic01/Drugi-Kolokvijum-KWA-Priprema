import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _token : any = null;
  private _user : any = null;

  get token(){
    if(this._token == null){
      this._token = localStorage.getItem("token");
    }
    return this._token;
  }

  get user(){
    if(this.token && this._user == null){
      this._user = JSON.parse(atob(this.token.split(".")[1]));  
    }
    return this._user;
  }

  constructor(private http:HttpClient) {}

  
  login(user:any){
    return this.http.post("http://localhost:3000/login",user).pipe(tap((response:any)=>{
      this._token = response["token"];      
      this._user = JSON.parse(atob(this.token.split(".")[1]));
      localStorage.setItem("token",this.token);            
    }))
  }

  proveraPravaPristupa(zahtevaneUloge:any){
    if(this.user){
      for(let r of zahtevaneUloge){
        if(this.user["roles"].includes(r)){
          return true;
        }
      } 
    }
    return false;
  }


}
