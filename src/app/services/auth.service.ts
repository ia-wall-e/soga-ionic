import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { from, map, Observable, throwError, BehaviorSubject } from 'rxjs';
import { FormGroup } from '@angular/forms';
import {
  RegisterCredentials,
  UserCredentials,
} from '@myInterfaces/user-credentials';
import { CustomErrorService } from './custom-error.service';
import { UtilsService } from './utils.service';
// export class CustomError extends Error {
//   code: string;

//   constructor(message: string, code: string) {
//     super(message);
//     this.code = code;
//     this.name = 'CustomError'; // Opcional: Cambiar el nombre del error si lo deseas
//   }
// }
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /*** ***/
  private userState_ = new BehaviorSubject<any>(false);
  private authState$ = this.userState_.asObservable();
  private userOnline: UserCredentials | null = null;
  constructor(
    private fireSvc: FirebaseService,
    private errorHandler: CustomErrorService,
    private utilSvc:UtilsService
  ) {}
  /*** ***/
  signUp(form: FormGroup): Observable<any | null> {
    try {
      if (this.userOnline) {
        return throwError(
          this.errorHandler.customError('User is already online', 'USER_ONLINE')
        );
      }
      const user = this.parseRegister(form.value);
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
  signIn(form: FormGroup): Observable<any | null> {
    if (this.userOnline) {
      return throwError(
        this.errorHandler.customError('User is already online', 'USER_ONLINE')
      );
    }
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
  /*singInGoogle-promise*/
  // signInGoogle() {
  //   try {
  //     if(this.userOnline){throw this.errorHandler.customError('User is already online', 'USER_ONLINE')}
  //     this.fireSvc.signInGoogle();
  //   } catch (err:any) {
  //     const alertButtons = [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         // handler: () => {
  //         //   console.log('Alert canceled');
  //         // },
  //       },
  //       {
  //         text: 'OK',
  //         role: 'confirm',
  //         handler: () => {
  //           this.signOut();
  //         },
  //       },
  //     ];
  //     const msg = this.errorCode(err);
  //     const alertDefault = (msg: string) => {
  //       this.utilSvc.alert({
  //         message: msg,
  //         cssClass: 'custom-alert',
  //         buttons: ['Cerrar'],
  //       });
  //     };
  //     const alertClose = () => {
  //       this.utilSvc.alert({
  //         subHeader: 'Hay una sesion abierta',
  //         message: '¿Deseas cerrar la sesion actual?',
  //         cssClass: 'custom-alert',
  //         buttons: alertButtons,
  //       });
  //     };
  //     (err.code == "USER_ONLINE") ? alertClose() : alertDefault(msg); 
  //     console.error(err.code);
  //     throw err;
  //   }
  // }
  /*singInGoogle-observable*/
  signInGoogle(){
    try {
      if(this.userOnline){return throwError(this.errorHandler.customError('User is already online', 'USER_ONLINE'))}
      console.log("se ejecuto signInGoogle")
     return from(this.fireSvc.signInGoogle()).pipe(map(auth=>{
      auth = this.parseUser(auth);
      return auth ? this.handlerSuccess(auth) : this.handlerError();
     }));
    } catch (err) {
      console.log(err)
      throw err;
    }
  }
  /* */
  signOut(): void {
    return this.fireSvc.signOut();
  }
  /*** ***/
  private handlerSuccess(auth: any): UserCredentials {
    return auth;
  }
  private handlerError() {
    throw new Error('Error al crear usuario');
  }
  /*** ***/
  sessionState(): void {
    if (this.userOnline) {
      this.errorHandler.customError('User is already online', 'USER_ONLINE');
      throw new Error('User is already online');
    }
  }
  authState(): Observable<UserCredentials | null> {
    return (this.authState$ = this.fireSvc.authState().pipe(
      map((auth) => {
        this.userOnline = auth;
        return auth;
      })
    ));
  }
  /*** utils ***/
  private parseUser(auth: any): any {
    if (!auth) return null;
    const name = this.capitalizeFirstLetter(auth.user.displayName);
    const email = auth.user.email.toLowerCase();
    return {
      uid: auth.user.uid,
      name: name,
      email: email,
      phone: auth.user.phoneNumber,
      img: auth.user.photoURL,
    };
  }
  parseRegister(data: any): RegisterCredentials {
    console.log(data)
    return {
      email: data.email,
      password: data.newpass['password'],
    };
  }
  capitalizeFirstLetter(str: string) {
    if (!str) return str;
    return str
      .split(' ') // Divide la cadena en un array de palabras
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitaliza la primera letra de cada palabra
      .join(' '); // Une las palabras en una sola cadena con espacios
  }
  errorCode(error: any): string {
    let errorMsg = 'Error desconocido al iniciar sesión.';
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
}
