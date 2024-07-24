import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '@myServices/auth.service';
import { FormValidatorService } from '@myServices/form-validator.service';
import { UtilsService } from '@myServices/utils.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpPage implements OnDestroy {
  private register$ = new Subscription();
  /*** formulario***/
  registerForm = this.fb.group({
    email: [
      '',
      [this.validateSvc.sequential([Validators.required, Validators.email])],
    ],
    newPass: {
      password: '',
      passConfirm: '',
    },
  });
  get emailControl() {
    return this.registerForm.get('email') as FormControl;
  }
  /*** ***/
  constructor(
    private validateSvc: FormValidatorService,
    private fb: FormBuilder,
    private authSvc: AuthService,
    private utilSvc:UtilsService
  ) {}
  /*** ***/
  ngOnDestroy() {
    this.register$.unsubscribe;
  }
  controlState(control: any): boolean {
    return control.invalid && (control.touched || control.dirty);
  }
  /*** ***/
  onSubmit(form: FormGroup) {
    const user = this.authSvc.parseRegister(form.value);
    this.register$ = this.authSvc.signUp(user).subscribe({
      next: (v) => this.handlerNext(v),
      error: (e) => this.handlerError(e),
    });
  }
  handlerNext(v: any) {
    console.log(v);
  }
  handlerError(e: any) {
   const msg= this.authSvc.errorCode(e);
    this.utilSvc.presentToast({
      message: msg,
      duration: 3000,
      color: 'primary',
      position: 'bottom',
      icon: 'alert-circle-outline',
    })
    console.error(e);
  }
signOut(){
  this.authSvc.signOut();
}
}
