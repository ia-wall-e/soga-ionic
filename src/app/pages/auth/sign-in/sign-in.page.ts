import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Location } from '@angular/common';
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
export class SignInPage
  implements OnInit, OnDestroy, ViewWillEnter, ViewWillLeave
{
  /*** ***/
  log$?: Subscription;
  testObs$?: Subscription;
  loginForm?: any;
  /*** formulario ***/
  // loginForm = this.fb.group({
  //   signInComp: {
  //     email: '',
  //     password: '',
  //   },
  // });
  /*** ***/
  constructor(
    private fb: FormBuilder,
    private authSvc: AuthService,
    private utilSvc: UtilsService,
    private location: Location
  ) {
    this.loginForm = this.fb.group({
      signInComp: {
        email: '',
        password: '',
      },
    });
    //------
    // let contador=0;
    // this.proob= setInterval(() => {
    //    contador++;
    //    console.log('login =>'+contador)
    //  }, 1000);
  }
  /*** lifeCircle ***/
  ngOnInit() {}
  ngOnDestroy() {}
  ionViewWillEnter(): void {
    console.log('SIGNIN_PAGE');
    this.testObs$ = this.utilSvc
      .testObs()
      .subscribe((r) => console.log('signin - ' + r));
  }
  ionViewWillLeave(): void {
    this.loginForm.reset();
    this.log$?.unsubscribe();
    this.testObs$?.unsubscribe();
    console.log('destroy login');
  }
  /*** ***/
  onSubmit(form: FormGroup) {
    this.log$ = this.utilSvc.withLoading(this.authSvc.signIn(form)).subscribe({
      next: (r) => this.handlerNext(r),
      error: (e) => this.handlerError(e),
    });
  }
  handlerNext(r: any) {
    console.log(r);
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
