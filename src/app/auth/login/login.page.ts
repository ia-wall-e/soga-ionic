import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  LoginCredentials,
  UserCredentials,
} from '@myInterfaces/user-credentials';
import { AuthService } from '@myServices/auth.service';
import { UtilsService } from '@myServices/utils.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {
  authSvc = inject(AuthService);
  utilSvc = inject(UtilsService);
  //#region PROPIEDADES
  logUser = new Subscription();
  //#endregion
  //#region FORMULARIO
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  get emailControl(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }
  get passwordControl(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }
  emailError = ['required', 'email'];
  pinError = ['required'];
  //#endregion
  //#region METODOS
  ngOnInit() {}
  ngOnDestroy() {
    this.logUser.unsubscribe();
  }
  signIn() {
     const credentials = this.loginForm.value as LoginCredentials;
     this.logUser = this.utilSvc
       .withLoading(this.authSvc.signIn(credentials))
       .subscribe({
         next: (response: UserCredentials) => this.handleSignInSuccess(response),
         error: (error) => this.handleSignInError(error),
         complete:()=> console.log('Se completo')
       });
  }
  private handleSignInSuccess(response: any) {
    this.authSvc.setPersistence();
    this.utilSvc.myRouterLink('/home');
    this.loginForm.reset();
  }
  private handleSignInError(error: any) {
    console.error(error);
    this.utilSvc.alert({
      header: 'Error al loguearte',
      message: 'Se ha presentado un problema al ingresar',
      buttons: ['Cerrar'],
    })
  }
  //#endregion
}
