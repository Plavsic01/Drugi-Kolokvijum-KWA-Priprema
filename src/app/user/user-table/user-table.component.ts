import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent {

  @Input()
  users:User[] = [];

  @Output()
  ukloniEvent = new EventEmitter<number>();

  ukloni(id:number|undefined){
    this.ukloniEvent.emit(id);
  }

}
