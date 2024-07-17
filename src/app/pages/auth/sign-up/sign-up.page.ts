import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup,  Validators } from '@angular/forms';
import { FormValidatorService } from '@myServices/form-validator.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  /*** propiedades ***/
  @ViewChild('inputPass') inputRef?: ElementRef;
  @ViewChild('inputconfirm') confirmRef?: ElementRef;
  iconEye: string = 'eye-outline';
  registerForm: FormGroup;
  /*** formulario ***/
  get phoneControl() {
   const data= this.registerForm.get('phone') as FormControl;
  //  console.log(data)
    return this.registerForm.get('phone') as FormControl;
  }
  get passGroupControl() {
    return this.registerForm.get('passGroup') as FormGroup;
  }
  get passControl() {
    const data = this.registerForm.get('passGroup') as FormGroup;
    return data.get('password') as FormControl;
  }
  get passConfirmControl() {
    const data = this.registerForm.get('passGroup') as FormControl;
    return data.get('passConfirm') as FormControl;
  }
  /*** ***/
  constructor(private validatorSvc: FormValidatorService) {
    this.registerForm = new FormGroup({
      phone: new FormControl(
        '',
        this.validatorSvc.sequential([
          Validators.required,
          this.validatorSvc.phoneRegex,
          this.validatorSvc.phoneLength,
        ])
      ),
      passGroup: new FormGroup(
        {
          password: new FormControl(
            '',
            this.validatorSvc.sequential([
              Validators.required,
              this.validatorSvc.passRegex,
              this.validatorSvc.passLength,
            ])
          ),
          passConfirm: new FormControl('',this.validatorSvc.sequential([Validators.required])),
        },
        { validators: this.validatorSvc.sequential([Validators.required,this.validatorSvc.passMatch()]) }
      ),
    });
  }
  /*** ***/
  ngOnInit() {}
  toggle(elem_:any) {
   const elem =elem_.nativeElement
    if (elem.type === 'password') {
      elem.type="text";
      this.iconEye = 'eye-off-outline';
    } else {
      elem.type="password";
      this.iconEye = 'eye-outline';
    }
  }
  controlState(control:any):boolean{
    return control.invalid && (control.touched || control.dirty)
  }
  prueba() {
    // console.log(this.passGroupControl.errors);
    // console.log(this.phoneControl.errors);
  }
}
