import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Rent } from 'src/app/model/rent';
import { LoginService } from 'src/app/service/login.service';


@Component({
  selector: 'app-rent-table',
  templateUrl: './rent-table.component.html',
  styleUrls: ['./rent-table.component.css']
})
export class RentTableComponent {
  @Input()
  rents:Rent[] = [];
  
  @Output()
  ukloniEvent = new EventEmitter<number>();

  constructor(public loginService:LoginService){}

  ukloni(id:number|undefined){
    this.ukloniEvent.emit(id);
  }
}
