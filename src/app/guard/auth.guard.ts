import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../service/login.service';

const auth = (route:ActivatedRouteSnapshot,state:RouterStateSnapshot) => {
  let loginService = inject(LoginService);
  let router = inject(Router);  
  if(loginService.proveraPravaPristupa(route.data["roles"])){
    return true;
  }
  return router.createUrlTree(["/login"]);
}

export { auth };
