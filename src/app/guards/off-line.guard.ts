import { inject } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from '@myServices/auth.service';
import { Observable } from 'rxjs';
export const offLineGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): | Observable< boolean | UrlTree>
| Promise< boolean | UrlTree>
| boolean
| UrlTree => {
  const stateSession = inject(AuthService).authState();
  return !stateSession ? false : inject(Router).createUrlTree(['/home']);
};
