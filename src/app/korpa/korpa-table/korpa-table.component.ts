import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';
import { Book } from 'src/app/model/book';
import { DragDropService } from 'src/app/service/drag-drop.service';

@Component({
  selector: 'app-korpa-table',
  templateUrl: './korpa-table.component.html',
  styleUrls: ['./korpa-table.component.css']
})
export class KorpaTableComponent {

  korpa:Book[] = [];

  constructor(private dragDropService:DragDropService){}

  onDrop(event:CdkDragDrop<Book[]>){
    this.dragDropService.drop(event);
    console.log(this.korpa); 
  }

}
