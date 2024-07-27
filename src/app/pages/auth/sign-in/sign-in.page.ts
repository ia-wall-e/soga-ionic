import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RegisterCredentials } from '@myInterfaces/user-credentials';
import { AuthService } from '@myServices/auth.service';
import { UtilsService } from '@myServices/utils.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnDestroy {
  /*** ***/

  log$?: Subscription;
  /*** ***/
  loginForm = this.fb.group({
    signInComp: {
      email: '',
      password: '',
    },
  });
  ngOnDestroy() {
    this.log$?.unsubscribe();
  }
  constructor(
    private fb: FormBuilder,
    private authSvc: AuthService,
    private utilSvc: UtilsService
  ) {}
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
    })
    console.error(e);
  }
}
