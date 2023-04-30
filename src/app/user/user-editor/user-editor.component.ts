import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.css']
})
export class UserEditorComponent implements OnInit {

  userZaIzmenu:User = {};

  constructor(private userService:UserService,private route:ActivatedRoute,
    private router:Router){}

  ngOnInit(): void {  
    this.pripremaZaIzmenu();  
  }

  pripremaZaIzmenu(){
    this.route.paramMap.subscribe(x=>{            
      let id:any = x.get("id");
      if(id != null){
        this.userService.getOne(id).subscribe(x=> this.userZaIzmenu = x);
      }      
    }) 
  }

  dodajUser(user:User){
    if(user["id"] !== undefined && user["id"] !== null){      
      this.userService.update(user.id,user).subscribe(x => {     
        this.router.navigate(["/"]);   
      })
    }else{
      this.userService.create(user).subscribe(x => {
        this.router.navigate(["/"]);           
      })
    }
  }

}
