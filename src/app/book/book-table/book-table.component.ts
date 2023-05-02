import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/model/book';
import { DragDropService } from 'src/app/service/drag-drop.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.css']
})
export class BookTableComponent {
  @Input()
  books:Book[] = [];

  @Output()
  ukloniEvent = new EventEmitter<number>();

  constructor(public loginService:LoginService,private dragDropService:DragDropService){}

  ukloni(id:number|undefined){
    this.ukloniEvent.emit(id);
  }

  onDrop(event:CdkDragDrop<Book[]>){
    console.log(event);    
    this.dragDropService.drop(event);
  }
}
