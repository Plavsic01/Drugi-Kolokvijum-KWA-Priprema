import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-editor',
  templateUrl: './book-editor.component.html',
  styleUrls: ['./book-editor.component.css']
})
export class BookEditorComponent implements OnInit {
  bookZaIzmenu:Book = {};

  constructor(private bookService:BookService,private route:ActivatedRoute,
    private router:Router){}

  ngOnInit(): void {  
    this.pripremaZaIzmenu();  
  }

  pripremaZaIzmenu(){
    this.route.paramMap.subscribe(x=>{            
      let id:any = x.get("id");
      if(id != null){
        this.bookService.getOne(id).subscribe(x=> this.bookZaIzmenu = x);
      }      
    }) 
  }

  dodajBook(book:Book){
    if(book["id"] !== undefined && book["id"] !== null){      
      this.bookService.update(book.id,book).subscribe(x => {     
        this.router.navigate(["/"]);   
      })
    }else{
      this.bookService.create(book).subscribe(x => {
        this.router.navigate(["/"]);           
      })
    }
  }
}
