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
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree => {
  const authSvc = inject(AuthService);
  const routeSvc = inject(Router);
  return authSvc.authState().pipe(
    map((auth) => {
      console.log(auth)
      return !auth ? true : routeSvc.createUrlTree(['/home']);
    })
  );
};
