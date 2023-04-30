import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  @Input()
  set podaci(v:any){
    this.formaUser.patchValue(v);
  }

  @Output()
  dodajEvent = new EventEmitter<any>();

  formaUser = new FormGroup({
    id:new FormControl(),
    username:new FormControl(null,Validators.required),
    password:new FormControl(null,Validators.required),
    roles:new FormControl(null,Validators.required)    
  },(control:AbstractControl) => {    
    if(control.get("username")?.valid && control.get("password")?.valid 
    && control.get("roles")?.valid){
      return null;
    }
    return {msg:"nije validna forma"};
  });

  create(){
    // console.log(this.formaUser.get("username")?.errors);     
    // console.log(this.formaUser.errors);        
    if(this.formaUser.valid){
      console.log(this.formaUser.value); 
      this.dodajEvent.emit(this.formaUser.value);
    }
  }

  reset(){
    this.formaUser.reset();
  }

}
