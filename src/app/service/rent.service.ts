import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rent } from '../model/rent';

@Injectable({
  providedIn: 'root'
})
export class RentService {

  constructor(private http:HttpClient) {}

  getAll(){
    return this.http.get<any[]>("http://localhost:3000/rents");
  }

  getOne(id:number){
    return this.http.get<any>(`http://localhost:3000/rents/${id}`);
  }

  create(rent:Rent){
    return this.http.post<Rent>("http://localhost:3000/rents",rent);
  }

  update(id:number,rent:Rent){
    return this.http.put<any>(`http://localhost:3000/rents/${id}`,rent);
  }

  delete(id:number){
    return this.http.delete<any>(`http://localhost:3000/rents/${id}`);
  }
}
