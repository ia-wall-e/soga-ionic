import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import {
  RegisterCredentials,
  UserCredentials,
} from '@myInterfaces/user-credentials';
import { from, map, Observable, catchError, BehaviorSubject } from 'rxjs';
import { FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /*** ***/
  private userState = new BehaviorSubject<any>(false);
  private authState$ = this.userState.asObservable();
  constructor(private fireSvc: FirebaseService) {}
  /*** ***/
  signUp(user: RegisterCredentials) {
    try {
      return from(Promise.resolve(this.fireSvc.signUp(user))).pipe(
        map((auth: any) => {
          auth = this.parseUser(auth);
          return auth ? this.handlerSuccess(auth) : this.handlerError();
        })
      );
    } catch (err) {
      throw err;
    }
  }
  signIn(form:FormGroup) {
    try {
      const user = form.value.signInComp;
      return from(Promise.resolve(this.fireSvc.signIn(user))).pipe(
        map((auth: any) => {
          auth = this.parseUser(auth);
          return auth ? this.handlerSuccess(auth) : this.handlerError();
        })
      );
    } catch (err) {
      throw err;
    }
  }
  signOut(): void {
    return this.fireSvc.signOut();
  }
  /*** ***/
  private handlerSuccess(auth: UserCredentials): UserCredentials {
    return auth;
  }
  private handlerError() {
    throw new Error('Error al crear usuario');
  }
  /*** ***/
  authState(): Observable<UserCredentials | null> {
    return (this.authState$ = this.fireSvc.authState());
  }
  /*** ***/
  private parseUser(auth: any): UserCredentials {
    return {
      uid: auth.user.uid,
      name: auth.user.displayName,
      email: auth.user.email,
      phone: auth.user.phoneNumber,
      img: auth.user.photoUrl,
    };
  }
  parseRegister(data: any): RegisterCredentials {
    return {
      email: data.email,
      password: data.newPass['password'],
    };
  }
  errorCode(error: any): string {
    let errorMsg = 'Error desconocido al iniciar sesión.';
    if (error.code === 'auth/email-already-in-use') {
      errorMsg = 'el correo electronico ya se encuentra registrado.';
    } else if (error.code === 'auth/network-request-failed') {
      errorMsg = 'No hay conexion a internet';
    } else if (error.code === 'auth/wrong-password') {
      errorMsg = 'Contraseña incorrecta. Por favor, inténtelo de nuevo.';
    } else if (error.code === 'auth/invalid-credential') {
      errorMsg =
        'Tu email o la contraseña no coinciden. Por favor, inténtelo de nuevo.';
    } else if (error.code == 'auth/missing-email') {
      errorMsg = 'No hay cuentas registradas con este email';
    }
    return errorMsg;
  }
}
