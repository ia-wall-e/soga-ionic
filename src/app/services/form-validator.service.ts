import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormValidatorService {
  //#region Auth-Branch 
  constructor() {}
  //*** ***//
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
  //*** ***//
  phoneLength: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    return control.value.length < 10 || control.value.length > 10
      ? { phoneLength: true }
      : null;
  };
  phoneRegex: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const regex = /^[0-9]+$/;
    const test = regex.test(control.value);
    return !test ? { phoneRegex: true } : null;
  };
  //*** ***//
  passLength: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    return control.value.length < 6 ? { passLength: true } : null;
  };
  passRegex: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[0-9A-Za-z]+$/;
    const test = regex.test(control.value);
    return !test ? { passRegex: true } : null;
  };
  passMatch(): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const passOne = group?.get('password');
      const passTwo = group?.get('passConfirm');
      if(passOne?.value !== passTwo?.value){
        (!passTwo?.errors)? passTwo?.setErrors({ passMatch: true }):null;
        return {passMatch:true}
      }else{
        (!passTwo?.errors || passTwo?.errors['passMatch'])? passTwo?.setErrors(null):null;
        return null;
      }
    };
  }
/*** ***/
  controlState(control:any):boolean{
    return control.invalid && (control.touched || control.dirty);
  }
 /*** ***/ 
//#endregion 
}
