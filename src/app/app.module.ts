import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserTableComponent } from './user/user-table/user-table.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UserPrikazComponent } from './user/user-prikaz/user-prikaz.component';
import { UserEditorComponent } from './user/user-editor/user-editor.component';
import { BookTableComponent } from './book/book-table/book-table.component';
import { BookPrikazComponent } from './book/book-prikaz/book-prikaz.component';
import { BookFormComponent } from './book/book-form/book-form.component';
import { BookEditorComponent } from './book/book-editor/book-editor.component';
import { RentTableComponent } from './rent/rent-table/rent-table.component';
import { RentFormComponent } from './rent/rent-form/rent-form.component';
import { RentPrikazComponent } from './rent/rent-prikaz/rent-prikaz.component';
import { RentEditorComponent } from './rent/rent-editor/rent-editor.component';
import { LoginComponent } from './login/login/login.component';
import { LoginInterceptor } from './interceptor/login.interceptor';
import { ProveraVracanjaDirective } from './directive/provera-vracanja.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { KorpaTableComponent } from './korpa/korpa-table/korpa-table.component';

@NgModule({
  declarations: [
    AppComponent,
    UserTableComponent,
    UserFormComponent,
    UserPrikazComponent,
    UserEditorComponent,
    BookTableComponent,
    BookPrikazComponent,
    BookFormComponent,
    BookEditorComponent,
    RentTableComponent,
    RentFormComponent,
    RentPrikazComponent,
    RentEditorComponent,
    LoginComponent,
    ProveraVracanjaDirective,
    KorpaTableComponent  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:LoginInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
