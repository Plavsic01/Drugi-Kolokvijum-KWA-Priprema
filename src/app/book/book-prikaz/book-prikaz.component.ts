import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-prikaz',
  templateUrl: './book-prikaz.component.html',
  styleUrls: ['./book-prikaz.component.css']
})
export class BookPrikazComponent implements OnInit {

  books:Book[] = [];  

  constructor(private bookService:BookService){}

  ngOnInit(): void {
    this.updateBook();
  }

  updateBook(){
    this.bookService.getAll().subscribe(x=>{
      this.books = x;
    })
  }

  ukloniBook(bookId:number){
    this.bookService.delete(bookId).subscribe(x=>{
      this.updateBook();
    })
  }

}
