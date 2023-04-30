import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from 'src/app/model/book';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-rent-form',
  templateUrl: './rent-form.component.html',
  styleUrls: ['./rent-form.component.css']
})
export class RentFormComponent {
  @Input()
  set podaci(v:any){
    this.formaRent.patchValue(v);
  }

  @Input()
  users:User[] = [];

  @Input()
  books:Book[] = [];

  @Output()
  dodajEvent = new EventEmitter<any>();

  formaRent = new FormGroup({
    id:new FormControl(),
    userId:new FormControl(null,Validators.required),
    bookId:new FormControl(null,Validators.required),
    rentDate:new FormControl(null,Validators.required),
    // returnDate:new FormControl(null,Validators.required),
    returnDate:new FormControl(),
    state:new FormControl(null,Validators.required),
    price:new FormControl(null,Validators.required)    
  },
  // (control:AbstractControl) => {    
  //   if(control.get("username")?.valid && control.get("password")?.valid 
  //   && control.get("roles")?.valid){
  //     return null;
  //   }
  //   return {msg:"nije validna forma"};
  // }
  );

  create(){        
    if(this.formaRent.valid){
      console.log(this.formaRent.value); 
      this.dodajEvent.emit(this.formaRent.value);
    }
  }

  reset(){
    this.formaRent.reset();
  }
}
