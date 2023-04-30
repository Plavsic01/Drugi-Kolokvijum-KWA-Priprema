import { Component, OnInit } from '@angular/core';
import { Rent } from 'src/app/model/rent';
import { LoginService } from 'src/app/service/login.service';
import { RentService } from 'src/app/service/rent.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-rent-prikaz',
  templateUrl: './rent-prikaz.component.html',
  styleUrls: ['./rent-prikaz.component.css']
})
export class RentPrikazComponent implements OnInit{

  rents:Rent[] = [];

  constructor(private rentService:RentService,private userService:UserService,
    public loginService:LoginService){}

  ngOnInit(): void {
    this.updateRent();    
  }

  updateRent(){
    this.rentService.getAll().subscribe(x=>{
      this.rents = x;
    });
  }

  ukloniRent(rentId:number){
    this.rentService.delete(rentId).subscribe(x=>{
      this.updateRent();
    })
  }

}
