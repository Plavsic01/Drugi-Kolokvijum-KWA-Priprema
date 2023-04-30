import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {

  @Input()
  set podaci(v:any){
    this.formaBook.patchValue(v);
  }

  @Output()
  dodajEvent = new EventEmitter<any>();

  formaBook = new FormGroup({
    id:new FormControl(),
    title:new FormControl(null,Validators.required),
    author:new FormControl(null,Validators.required),
    genre:new FormControl(null,Validators.required)    
  },(control:AbstractControl) => {    
    if(control.get("title")?.valid && control.get("author")?.valid 
    && control.get("genre")?.valid){
      return null;
    }
    return {msg:"nije validna forma"};
  });

  create(){
    // console.log(this.formaUser.get("username")?.errors);     
    // console.log(this.formaUser.errors);        
    if(this.formaBook.valid){
      console.log(this.formaBook.value); 
      this.dodajEvent.emit(this.formaBook.value);
    }
  }

  reset(){
    this.formaBook.reset();
  }
}
