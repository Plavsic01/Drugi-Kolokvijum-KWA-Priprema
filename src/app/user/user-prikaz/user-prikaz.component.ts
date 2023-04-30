import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-prikaz',
  templateUrl: './user-prikaz.component.html',
  styleUrls: ['./user-prikaz.component.css']
})
export class UserPrikazComponent implements OnInit {
  
  users:User[] = [];

  constructor(private userService:UserService){}

  ngOnInit(): void {
    this.updateUser();
  }

  updateUser(){
    this.userService.getAll().subscribe(x=>{
      this.users = x;
    })
  }

  ukloniUser(userId:number){
    this.userService.delete(userId).subscribe(x=>{
      this.updateUser();
    })
  }

}
