import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from '@myServices/auth.service';
import { Observable, map } from 'rxjs';

export const stateOn: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):
  | Observable< boolean | UrlTree>
  | Promise< boolean | UrlTree>
  | boolean
  | UrlTree => {
    const data = inject(AuthService).authenticated();
    console.log(data)
  // return data.pipe()
    // ? true
  //   : inject(Router).createUrlTree(['/auth/login']);
  return inject(AuthService).authenticated()
 
};

