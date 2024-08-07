import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { ViewWillEnter, ViewWillLeave } from '@ionic/angular';
import { AuthService } from '@myServices/auth.service';
import { FormValidatorService } from '@myServices/form-validator.service';
import { UtilsService } from '@myServices/utils.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements ViewWillEnter, ViewWillLeave {
  /*** ***/
  private onsubmit$? = new Subscription();
  private alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      cssClass: 'alert-button-cancel',
    },
    {
      text: 'OK',
      role: 'confirm',
      cssClass: 'alert-button-confirm',
      handler: () => {
        this.authSvc.signOut();
      },
    },
  ];
  //pruebas
  testObs$?: Subscription;
  showNewpass: boolean = true;
  /*** formulario***/
  registerForm = this.fb.group({
    email: [
      '',
      [this.formSvc.sequential([Validators.required, Validators.email])],
    ],
    newpass: {
      password: '',
      passConfirm: '',
    },
  });
  get emailControl() {
    return this.registerForm.get('email') as FormControl;
  }
  /*** ***/
  constructor(
    private formSvc: FormValidatorService,
    private fb: FormBuilder,
    private authSvc: AuthService,
    private utilSvc: UtilsService
  ) {}
  /*** lifecircle ***/

  ionViewWillEnter(): void {
    // console.log('SIGNUP_PAGE');
    // this.testObs$= this.utilSvc.testObs().subscribe((r) => console.log('signup - ' + r));
  }
  ionViewWillLeave(): void {
    // this.testObs$?.unsubscribe();
    this.onsubmit$?.unsubscribe();
    this.registerForm.reset();
  }
  /*** ***/
  controlState(control: any): boolean {
    return this.formSvc.controlState(control);
  }
  /*** ***/
  onSubmit(form: FormGroup) {
    this.onsubmit$ = this.utilSvc
      .withLoading(this.authSvc.signUp(form))
      .subscribe({
        next: (r) => this.handlerNext(r),
        error: (e) => this.handlerError(e),
      });
  }
  handlerNext(r: any) {
    r?this.utilSvc.route('/home'):null;
  }
  handlerError(e: any) {
    const msg = this.authSvc.errorCode(e);
    const alertDefault = (msg: string) => {
      this.utilSvc.alert({
        message: msg,
        cssClass: 'custom-alert',
        buttons: ['Cerrar'],
      });
    };
    const alertClose = () => {
      this.utilSvc.alert({
        header: 'Hay una sesion abierta',
        message: '¿Deseas cerrar la sesion actual?',
        cssClass: 'custom-alert',
        buttons: this.alertButtons,
      });
    };
    e.code == 'USER_ONLINE' ? alertClose() : alertDefault(msg);
    console.error(e);
  }
  /*** Navegation-Router ***/
  goEntry(): void {
    this.utilSvc.route('/auth/entry');
  }
  goLogin(): void {
    this.utilSvc.route('/auth/login/');
  }
  /*** ***/
  showNewPass() {
    this.showNewpass = !this.showNewpass;
  }
}
