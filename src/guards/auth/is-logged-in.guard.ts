import { Injectable, inject } from '@angular/core';
import {
  CanActivate,
  UrlTree,
  Router,
  CanActivateChild,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '@myServices/auth.service';
import { UtilsService } from '@myServices/utils.service';
@Injectable({
  providedIn: 'root',
})
export class IsLoggedInGuard implements CanActivate, CanActivateChild {
  authSvc = inject(AuthService);
  utilSvc = inject(UtilsService);
myRoute=inject(Router);
  canActivate(): Observable<boolean | UrlTree>{
    return this.isLoggedIn();
  }
  canActivateChild():Observable<boolean | UrlTree>{
    return this.isLoggedIn();
  }
  //#METODOS 
  private isLoggedIn(): Observable<boolean | UrlTree> {
    return this.authSvc.authState$.pipe(map((v)=>
     !! v|| this.myRoute.parseUrl('/login')
    ));
  }
}
@Injectable({
  providedIn: 'root',
})
export class NoLoggedInGuard implements CanActivate, CanActivateChild {
  authSvc = inject(AuthService);
  utilSvc = inject(UtilsService);
myRoute=inject(Router);
  canActivate(): Observable<boolean | UrlTree>{
    return this.NoLoggedIn();
  }
  canActivateChild():Observable<boolean | UrlTree>{
    return this.NoLoggedIn();
  }
  //#METODOS 
  private NoLoggedIn(): Observable<boolean | UrlTree> {
    return this.authSvc.authState$.pipe(map((v)=>
     !v|| this.myRoute.parseUrl('/home')
    ));
  }
}