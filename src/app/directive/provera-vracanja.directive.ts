import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LoginService } from '../service/login.service';

@Directive({
  selector: '[appProveraVracanja]'
})
export class ProveraVracanjaDirective implements OnChanges {

  @Input()
  appProveraVracanja:any = null;

  constructor(private el:ElementRef,private loginService:LoginService) {}

  ngOnChanges(changes: SimpleChanges): void { 
    
    let currDate = new Date();
    currDate.setHours(0,0,0,0);

    let returnDate = null;
  
    if(changes['appProveraVracanja'].currentValue.returnDate != '' || 
    changes['appProveraVracanja'].currentValue.returnDate != null){
      returnDate = new Date(changes['appProveraVracanja'].currentValue.returnDate);
      returnDate.setHours(0,0,0,0);
    }
  
    if(changes['appProveraVracanja'].currentValue.returnDate == '' ||
    changes['appProveraVracanja'].currentValue.returnDate == null || (returnDate != null && returnDate > currDate)){       
      // Koristimo ovaj pristup zato sto ne zelimo da direktiva prolazi kroz sve rents objekte
      // vec samo kroz one koji se prikazuju obicnom useru (ROLE_USER)

      //Uslovi postoje jer ako je logovan obican user ova direktiva se stavlja ng-container tag
      // A ako je admin user stavlja se na tr tag
      if(this.loginService.user["roles"].includes('ROLE_USER')){
        this.el.nativeElement.parentNode.style.backgroundColor = "red";

      }else if(this.loginService.user["roles"].includes('ROLE_ADMIN')){
        this.el.nativeElement.style.backgroundColor = "red";
      }
      
    }
    
  }

}
