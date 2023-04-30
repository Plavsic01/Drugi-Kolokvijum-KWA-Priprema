import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/model/book';
import { Rent } from 'src/app/model/rent';
import { User } from 'src/app/model/user';
import { BookService } from 'src/app/service/book.service';
import { RentService } from 'src/app/service/rent.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-rent-editor',
  templateUrl: './rent-editor.component.html',
  styleUrls: ['./rent-editor.component.css']
})
export class RentEditorComponent implements OnInit{
  rentZaIzmenu:Rent = {};

  users:User[] = [];
  
  books:Book[] = [];

  constructor(private rentService:RentService,private userService:UserService,private bookService:BookService,
    private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {  
    this.dobaviBooks();
    this.dobaviUsers();
    this.pripremaZaIzmenu(); 
     
  }

  pripremaZaIzmenu(){
    this.route.paramMap.subscribe(x=>{            
      let id:any = x.get("id");
      if(id != null){
        this.rentService.getOne(id).subscribe(x=> this.rentZaIzmenu = x);
      }      
    }) 
  }

  dobaviUsers(){
    this.userService.getAll().subscribe(x=>this.users = x);
  }

  dobaviBooks(){
    this.bookService.getAll().subscribe(x=>this.books = x);
  }


  dodajRent(rent:Rent){
    if(rent["id"] !== undefined && rent["id"] !== null){      
      this.rentService.update(rent.id,rent).subscribe(x => {     
        this.router.navigate(["/"]);   
      })
    }else{
      this.rentService.create(rent).subscribe(x => {
        this.router.navigate(["/"]);           
      })
    }
  }
}
