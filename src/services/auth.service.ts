import { Injectable, inject } from '@angular/core';
import { Observable, map, from, BehaviorSubject, catchError } from 'rxjs';
import {
  LoginCredentials,
  UserCredentials,
  RegisterCredentials,
} from '@myInterfaces/user-credentials';
import { FirebaseService } from '@myServices/firebase.service';
import { User } from 'firebase/auth';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private fireSvc = inject(FirebaseService);
  //#region PROPIEDADES
  private logState = new BehaviorSubject<any>(false);
  authState$ = this.logState.asObservable();
  //#endregion
  //#region METODOS CRUD-USER
  signIn(credentials: LoginCredentials): Observable<any> {
    return from(Promise.resolve(this.fireSvc.signInEmail(credentials))).pipe(
      map((x) => {
        return x;
      }),
      catchError((error) => {
        throw error;
      })
    );
  }
  signOut(): void {
    try {
      localStorage.removeItem('user');
      this.fireSvc.signOut();
    } catch (err) {
      throw new Error('Se presento problemas al cerrar la sesion');
    }
  }
  signUp(credentials: RegisterCredentials): Observable<any> {
    return from(Promise.resolve(this.fireSvc.signUpEmail(credentials))).pipe(
      map((authData: any) => {
        return true;
      })
    );
  }
  //¡=== set data user===//
  updateName(name: string) {
    return from(Promise.resolve(this.fireSvc.updateUser(name)));
  }
  //#endregion
  //#region METODOS
  getUserInfo(uid: string): Observable<any> {
    return from(this.fireSvc.getDataUser(uid));
  }
  getUID(): Observable<string | null> {
    return this.authState$.pipe(map((v)=> (v?v.uid:null)))
    
  }
  authState(): Observable<UserCredentials | null> {
    return (this.authState$ = this.fireSvc
      .authState()
      .pipe(map((user) => (user ? this.createCredentials(user) : null))));
  }
  setPersistence() {
    this.fireSvc.persistenceSession();
  }
  //#endregion
  //#region METODOS PRIVADOS
  /*
  private createLocalSesion(key: string, data: any) {
    try {
      if (typeof data == 'object') {
        data = JSON.stringify(data);
      }
      return localStorage.setItem(key, data);
    } catch (err) {
      throw new Error('file user error');
    }
  }
  */
  private createCredentials(user): UserCredentials {
    return {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      phone: user.phoneNumber,
      img: user.photoUrl,
    };
  }
  //#endregion
}
