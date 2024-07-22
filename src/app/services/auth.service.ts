import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import {
  RegisterCredentials,
  UserCredentials,
} from '@myInterfaces/user-credentials';
import { from, map, Observable, catchError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fireSvc: FirebaseService) {}
  /*** ***/
  signUp(user: RegisterCredentials){
    try {
      return from(Promise.resolve(this.fireSvc.signUp(user))).pipe(
        map((auth: any) => {
          auth = this.parseUser(auth);
         return (auth)?this.handlerSuccess(auth):this.handlerError();
        })
      );
    } catch (err) {
      throw err;
    }
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
    return this.authState();
  }
   /*** ***/
  private parseUser(auth): UserCredentials {
    return {
      uid: auth.user.uid,
      name: auth.user.displayName,
      email: auth.user.email,
      phone: auth.user.phoneNumber,
      img: auth.user.photoUrl,
    };
  }
  parseAuthCredentials(data: any): RegisterCredentials {
    return {
      email: data.email,
      password: data.newPass['password'],
    };
  }
  errorCode(error: any): string {
   let errorMsg = 'Error desconocido al iniciar sesión.';
    if (error.code === 'auth/email-already-in-use') {
     errorMsg = 'el correo electronico ya se encuentra registrado.';
    } else if (error.code === 'auth/wrong-password') {
     errorMsg = 'Contraseña incorrecta. Por favor, inténtelo de nuevo.';
    }
    return errorMsg
  }
}
