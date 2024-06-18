import { Injectable, inject } from '@angular/core';
import {
  Observable,
  map,
  from,
  BehaviorSubject,
  throwError,
  catchError,
  switchMap,
  filter,
  of,
  tap,
  takeWhile,
} from 'rxjs';
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
  //#PROPIEDADES
  private logState = new BehaviorSubject<any>(false);
  authState$ = this.logState.asObservable();
  //#METODOS CRUD-USER
  // signIn(credentials: LoginCredentials): Observable<any> {
  //   return from(Promise.resolve(this.fireSvc.signInEmail(credentials))).pipe(
  //     map((x) => {
  //       return x;
  //     }),
  //     catchError((error) => {
  //       throw error;
  //     })
  //   );
  // }
  //!refactor
  // signIn(credentials: LoginCredentials): Observable<any> {
  //     return this.authState().pipe(
  //       switchMap((x: UserCredentials | null) => {
  //         if (!x) {
  //           return this.handlerFalse(credentials,x);
  //         } else {
  //           throw 'four!';
  //         }
  //       }),
  //       catchError(err => {throw 'error in source. Details: ' + err})
  //     );
  // }

  //!refactor
  signIn(credentials: LoginCredentials): Observable<any> {
    return this.authState().pipe(
      switchMap((x: UserCredentials | null) => {
        if (!x) {
          return this.handlerFalse(credentials, x).pipe(
            catchError(err => {
              throw 'Error in handlerFalse. Details: ' + err;
            })
          );
        } else {
        return of(new Error("error"))
        }
      }),
      catchError(err => {
        throw 'Error in signIn. Details: ' + err;
      })
    );
  }
  //!
  private handlerFalse(credentials: LoginCredentials, uid) {
    return from(Promise.resolve(this.fireSvc.signInEmail(credentials))).pipe(
      map((x) => {
        console.log('Se ejecuto');
        return x;
      })
    );
  }
  //#
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
  //#METODOS
  getUserInfo(uid: string): Observable<any> {
    return from(this.fireSvc.getDataUser(uid));
  }
  getUID(): Observable<string | null> {
    return this.authState$.pipe(map((v) => (v ? v.uid : null)));
  }
  authState(): Observable<UserCredentials | null> {
    return (this.authState$ = this.fireSvc
      .authState()
      .pipe(map((user) => (user ? this.createCredentials(user) : null))));
  }
  setPersistence() {
    this.fireSvc.persistenceSession();
  }
  //#utils
  private createCredentials(user): UserCredentials {
    return {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      phone: user.phoneNumber,
      img: user.photoUrl,
    };
  }
}
