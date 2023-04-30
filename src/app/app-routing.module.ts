import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPrikazComponent } from './user/user-prikaz/user-prikaz.component';
import { UserEditorComponent } from './user/user-editor/user-editor.component';
import { BookPrikazComponent } from './book/book-prikaz/book-prikaz.component';
import { BookEditorComponent } from './book/book-editor/book-editor.component';
import { RentPrikazComponent } from './rent/rent-prikaz/rent-prikaz.component';
import { LoginComponent } from './login/login/login.component';
import { auth } from './guard/auth.guard';
import { RentEditorComponent } from './rent/rent-editor/rent-editor.component';


const routes: Routes = [
  {path:"login",component:LoginComponent},
  
  {path:"users",component:UserPrikazComponent,data:{roles:["ROLE_USER","ROLE_ADMIN"]},
  canActivate:[
    auth
  ]},

  {path:"books",component:BookPrikazComponent,data:{roles:["ROLE_USER","ROLE_ADMIN"]},
  canActivate:[
    auth
  ]},

  {path:"rents",component:RentPrikazComponent,data:{roles:["ROLE_USER","ROLE_ADMIN"]},
  canActivate:[
    auth
  ]},

  {path:"dodavanje-usera",component:UserEditorComponent},

  {path:"izmena-usera/:id",component:UserEditorComponent},

  {path:"dodavanje-book",component:BookEditorComponent,data:{roles:["ROLE_ADMIN"]},
  canActivate:[
    auth
  ]},

  {path:"izmena-book/:id",component:BookEditorComponent,data:{roles:["ROLE_ADMIN"]},
  canActivate:[
    auth
  ]},
  
  {path:"dodavanje-rent",component:RentEditorComponent,data:{roles:["ROLE_USER","ROLE_ADMIN"]},
  canActivate:[
    auth
  ]
  },

  {path:"izmena-rent/:id",component:RentEditorComponent,data:{roles:["ROLE_ADMIN"]},
  canActivate:[
    auth
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
