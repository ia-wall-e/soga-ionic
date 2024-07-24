import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { RegisterCredentials } from '@myInterfaces/user-credentials';
import { AuthService } from '@myServices/auth.service';
import { FormValidatorService } from '@myServices/form-validator.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnDestroy {
  /** **/
  log$?: Subscription;
  /** **/
  loginForm = this.fb.group({
    email: [
      '',
      [this.validateSvc.sequential([Validators.required, Validators.email])],
    ],
    password: ['', [Validators.required]],
  });
  get emailControl() {
    return this.loginForm.get('email') as FormControl;
  }
  get passControl() {
    return this.loginForm.get('password') as FormControl;
  }
  ngOnDestroy() {
    this.log$?.unsubscribe();
  }
  constructor(
    private fb: FormBuilder,
    private validateSvc: FormValidatorService,
    private authSvc: AuthService
  ) {}
  controlState(control: any): boolean {
    return control.invalid && (control.touched || control.dirty);
  }
  onSubmit(form: FormGroup) {
    const user = form.value as RegisterCredentials;
    console.log(user)
    this.log$ = this.authSvc.signIn(user).subscribe({
      next: () => this.handlerNext(),
      error: () => this.handlerError(),
    });
  }
  handlerNext() {}
  handlerError() {}
}
