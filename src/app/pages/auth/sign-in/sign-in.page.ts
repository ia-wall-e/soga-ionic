import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ViewWillLeave, ViewWillEnter } from '@ionic/angular';
import { AuthService } from '@myServices/auth.service';
import { UtilsService } from '@myServices/utils.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInPage implements ViewWillEnter, ViewWillLeave {
  /*** ***/
  log$?: Subscription;
  // testObs$?: Subscription;
  /*** formulario ***/
  loginForm = this.fb.group({
    signInComp: {
      email: '',
      password: '',
    },
  });
  /*** ***/
  constructor(
    private fb: FormBuilder,
    private authSvc: AuthService,
    private utilSvc: UtilsService
  ) {}
  /*** lifeCircle ***/
  ionViewWillEnter(): void {
    //---test observables---//
    // console.log('SIGNIN_PAGE');
    // this.testObs$ = this.utilSvc
    //   .testObs()
    //   .subscribe((r) => console.log('signin - ' + r));
  }
  ionViewWillLeave(): void {
    this.loginForm.get('signInComp')?.reset();
    this.log$?.unsubscribe();
    // this.testObs$?.unsubscribe();
    // console.log('destroy login');
  }
  /*** Submit ***/
  onSubmit(form: FormGroup) {
    this.log$ = this.utilSvc.withLoading(this.authSvc.signIn(form)).subscribe({
      next: (r) => this.handlerNext(r),
      error: (e) => this.handlerError(e),
    });
  }
  handlerNext(r: any) {
    r?this.utilSvc.route('/home'):null;
  }
  handlerError(e: any) {
    const msg = this.authSvc.errorCode(e);
    this.utilSvc.alert({
      message: msg,
      cssClass: 'custom-alert',
      buttons: ['Cerrar'],
    });
    console.error(e);
  }
}
