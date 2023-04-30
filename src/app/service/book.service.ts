import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) {}

  getAll(){
    return this.http.get<any[]>("http://localhost:3000/books");
  }

  getOne(id:number){
    return this.http.get<any>(`http://localhost:3000/books/${id}`);
  }

  create(book:Book){
    return this.http.post<Book>("http://localhost:3000/books",book);
  }

  update(id:number,book:Book){
    return this.http.put<any>(`http://localhost:3000/books/${id}`,book);
  }

  delete(id:number){
    return this.http.delete<any>(`http://localhost:3000/books/${id}`);
  }
}
