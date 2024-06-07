import { Injectable } from '@angular/core';
import {
  AbstractControl,
  ValidatorFn,
  ValidationErrors,
  FormControl,
} from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export class FormValidatorsService {
  //*COMMON*//
  sequential(validators: ValidatorFn[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      for (const validator of validators) {
        const error = validator(control);
        if (error) {
          return error;
        }
      }
      return null;
    };
  }
  //*PASSWORD(Pin)*//
  passLength: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    if (control.value.length < 6 || control.value.length > 6) {
      return { passLength: true };
    }
    return null;
  };
  passwordEqual: ValidatorFn = (
    group: AbstractControl
  ): ValidationErrors | null => {
    const newPass = group.get('password') as FormControl;
    const confirmPass = group.get('confirmPass') as FormControl;
    if (newPass.value != '' && confirmPass.value != '') {
      return newPass.value === confirmPass.value
        ? null
        : { passwordEqual: true };
    }
    return null;
  };
  passwordRegex: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const passwordRegex = /^[0-9]+$/;
    return !passwordRegex.test(control.value)
      ? { passwordRegex: true }
      : null;
  }; //*PHONE*//
  //*PHONE
  phoneLength: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    if (control.value.length < 10 || control.value.length > 10) {
      return { phoneLength: true };
    }
    return null;
  };
}
