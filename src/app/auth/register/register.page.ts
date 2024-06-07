import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterCredentials } from '@myInterfaces/user-credentials';
import { AuthService } from '@myServices/auth.service';
import { FormValidatorsService } from '@myServices/form-validators.service';
import { UtilsService } from '@myServices/utils.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  private authSvc = inject(AuthService);
  myValidators = inject(FormValidatorsService);
  utilSvc = inject(UtilsService);
  //#region aceptacion de terminos
  onlyRead_: boolean = false;
  //#endregion
  //#region Ver pass
  @ViewChild('inpPass') selectorReferencia?: ElementRef;
  iconEye: string = 'eye-outline';
  //#endregion
  //#region FORM-STEP
  step: number = 1;
  //#endregion
  //#region FORMULARIO
  newPassword = new FormGroup(
    {
      password: new FormControl(
        '',
        this.myValidators.sequential([
          Validators.required,
          this.myValidators.passLength,
        ])
      ),
      confirmPass: new FormControl('', [Validators.required]),
    },
    this.myValidators.passwordEqual
  );
  registerForm = new FormGroup({
    uid: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    // phone: new FormControl(
    //   '',
    //   this.myValidators.sequential([
    //     Validators.required,
    //     this.myValidators.phoneLength,
    //     this.myValidators.passwordRegex,
    //   ])
    // ),
    // phone: new FormControl('', { validators:sequentialValidators([Validators.required, phoneLength]), updateOn: 'submit' }),
    password: this.newPassword.get('password') as FormControl,
  });
  get emailControl(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }
  // get phoneControl(): FormControl {
  //   return this.registerForm.get('phone') as FormControl;
  // }
  get passControl(): FormControl {
    return this.newPassword.get('password') as FormControl;
  }
  get confirmPassControl(): FormControl {
    return this.newPassword.get('confirmPass') as FormControl;
  }
  get passEqualControl(): FormGroup {
    return this.newPassword as FormGroup;
  }
  emailError = ['required', 'email'];
  // phoneError = ['required', 'phoneLength', 'passwordRegex'];
  passError = ['required', 'passLength'];
  confirmPassError = ['required'];
  passEqualError = ['passwordEqual'];
  //#endregion FORMULARIO
  //#region METODOS
  ngOnInit() {}
  //¡Promises
  // async onSubmit(form: FormGroup) {
  //   if (form.valid) {
  //     this.authSvc
  //       .signUp(this.registerForm.value as RegisterCredentials)
  //       .then((res) => {
  //         const uid = res.user.uid;
  //         this.registerForm.controls.uid.setValue(uid);
  //         this.setUserInfo(uid);
  //         this.utilsSvc.myRouterLink('/home');
  //         this.registerForm.reset();
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //         this.utilsSvc.presentToast({
  //           message: 'Se ha presentado un error',
  //           duration: 2500,
  //           color: "primary",
  //           position:'bottom',
  //           icon:'alert-circle-outline'
  //         })
  //       })
  //       .finally(() => {
  //       });
  //   }
  // }
  //=== ===//
  // async setUserInfo(uid: string) {
  //   const path = `users/${uid}`;
  //   delete this.registerForm.value.password;
  //   this.authSvc
  //     .setDataUser(path, this.registerForm.value)
  //     .then(async (res) => {
  //       this.utilsSvc.saveStorage('user', this.registerForm.value);
  //     })
  //     .catch((error) => {})
  //     .finally(() => {});
  // }
  //¡Observables
  onSubmit(form: FormGroup) {
    if (form.valid) {
      this.utilSvc.withLoading(this.authSvc.signUp(form.value as RegisterCredentials))
      .subscribe({
        next: (v) => this.handleSignUpSuccess(v),
        error: (err) =>this.handleSignUpError(err)
      });
    }
  }
  private handleSignUpSuccess(response: any, loading?: HTMLIonLoadingElement) {
    console.log(response);
    this.utilSvc.myRouterLink('/home');
    this.registerForm.reset();
  }
  private handleSignUpError(error: any, loading?: HTMLIonLoadingElement) {
    console.error(error);
    this.utilSvc.presentToast({
      message: 'Se ha presentado un error',
      duration: 2000,
      color: 'primary',
      position: 'bottom',
      icon: 'alert-circle-outline',
    });
  }
  //©form-step
  nextStep(): void {
    this.step = this.step + 1;
  }
  prevStep() {
    this.step = this.step - 1;
  }
  showPass(): void {
    const inputHtml = this.selectorReferencia?.nativeElement;
    if (inputHtml.type == 'password') {
      inputHtml.type = 'text';
      this.iconEye = 'eye-off-outline';
    } else {
      inputHtml.type = 'password';
      this.iconEye = 'eye-outline';
    }
  }
  //#endregion
}
