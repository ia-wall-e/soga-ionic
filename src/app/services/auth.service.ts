import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { from, map, Observable, throwError, BehaviorSubject, take } from 'rxjs';
import { FormGroup } from '@angular/forms';
import {
  RegisterCredentials,
  UserCredentials,
} from '@myInterfaces/user-credentials';
import { CustomErrorService } from './custom-error.service';
import { UtilsService } from './utils.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //#region Auth-branch
  /*** ***/
  private authState_ = new BehaviorSubject<any>(false);
  private authState$: any = this.authState_.asObservable;
  private userState: UserCredentials | null = null;
  constructor(
    private fireSvc: FirebaseService,
    private errorHandler: CustomErrorService,
    private utilSvc: UtilsService
  ) {}
  /*** ***/
  signUp(form: FormGroup): Observable<any | null> {
    try {
      if (this.userState) {
        return throwError(
          this.errorHandler.customError('User is already online', 'USER_ONLINE')
        );
      }
      const user = this.parseRegister(form.value);
      return from(Promise.resolve(this.fireSvc.signUp(user))).pipe(
        map((auth: any) => {
          return auth ? this.handlerSuccess(auth) : this.handlerError();
        })
      );
    } catch (err) {
      throw err;
    }
  }
  signIn(form: FormGroup): Observable<any | null> {
    if (this.userState) {
      return throwError(
        this.errorHandler.customError('User is already online', 'USER_ONLINE')
      );
    }
    try {
      const user = form.value.signInComp;
      return from(Promise.resolve(this.fireSvc.signIn(user))).pipe(
        map((auth: any) => {
          return auth ? this.handlerSuccess(auth) : this.handlerError();
        })
      );
    } catch (err) {
      throw err;
    }
  }
  signInGoogle() {
    try {
      if (this.userState) {
        return throwError(
          this.errorHandler.customError('User is already online', 'USER_ONLINE')
        );
      }
      return from(this.fireSvc.signInGoogle()).pipe(
        map((auth) => {
          return auth ? this.handlerSuccess(auth) : this.handlerError();
        })
      );
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  signOut(): void {
    return this.fireSvc.signOut();
  }
  /*** ***/
  private handlerSuccess(auth: any): Boolean {
    return true;
  }
  private handlerError() {
    throw new Error('Error al crear usuario');
  }
  /*** ***/
  authState(): Observable<UserCredentials | null> {
    console.log('AuthState ejecutandose');
    return (this.authState$ = this.fireSvc.authState().pipe(
      map((auth) => {
        this.userState = auth;
        const data = this.createUser(auth);
        return data;
      })
    ));
  }
  /*** Recovery ***/
  resetPass(email: string): Observable<any | null> {
    try {
      if (this.userState) {
        return throwError(
          this.errorHandler.customError('User is already online', 'USER_ONLINE')
        );
      }
      return from(this.fireSvc.resetPass(email));
    } catch (e) {
      throw e;
    }
  }
  /*** utils ***/
  createUser(auth: any): UserCredentials | null {
    if (!auth) return null;
    const name = this.capitalizeFirstLetter(auth._delegate.displayName);
    const email = auth._delegate.email.toLowerCase();
    const user = {
      uid: auth._delegate.uid,
      name: name,
      email: email,
      phone: auth._delegate.phoneNumber,
      img: auth._delegate.photoURL,
    };
    if (user.uid && user.email) {
      return user;
    } else {
      return null;
    }
  }
  parseRegister(data: any): RegisterCredentials {
    return {
      email: data.email,
      password: data.newpass['password'],
    };
  }
  capitalizeFirstLetter(str: string) {
    if (!str) return str;
    const strDat = str
      .split(' ') // Divide la cadena en un array de palabras
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitaliza la primera letra de cada palabra
      .join(' '); // Une las palabras en una sola cadena con espacios
    return strDat;
  }
  errorCode(error: any): string {
    let errorMsg = 'Error al iniciar sesión.';
    if (error.code === 'auth/email-already-in-use') {
      errorMsg = 'el correo electronico ya se encuentra registrado.';
    } else if (error.code === 'auth/network-request-failed') {
      errorMsg = 'No hay conexion a internet';
    } else if (error.code === 'auth/wrong-password') {
      errorMsg = 'Contraseña incorrecta. Por favor, inténtalo de nuevo.';
    } else if (error.code === 'auth/invalid-email') {
      errorMsg = 'El formato del correo es invalido';
    } else if (error.code === 'auth/invalid-credential') {
      errorMsg =
        'Tu email o la contraseña no coinciden. Por favor, inténtalo de nuevo.';
    } else if (error.code == 'auth/missing-email') {
      errorMsg = 'No hay cuentas registradas con este email';
    } else if (error.code == 'USER_ONLINE') {
      errorMsg = 'Ya hay una sesion abierta';
    }
    return errorMsg;
  }
  //#endregion
}
/*** Notas: */
