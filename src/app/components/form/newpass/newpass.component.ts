import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  forwardRef,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  Validators,
} from '@angular/forms';
import { Subscription, tap } from 'rxjs';
import { FormValidatorService } from '@myServices/form-validator.service';
import { UtilsService } from '@myServices/utils.service';
@Component({
  selector: 'app-newpass',
  templateUrl:'./newpass.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NewpassComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => NewpassComponent),
      multi: true,
    },
  ],
})
export class NewpassComponent
  implements OnInit, OnDestroy, ControlValueAccessor, Validator
{
  /*** Propiedades ***/
  @ViewChild('inputPass') inputRef?: ElementRef;
  @ViewChild('inputconfirm') confirmRef?: ElementRef;
  iconEye: string = 'eye-outline';
  private sub$?: Subscription;
  private testObs$? : Subscription;
  /*** FormReactive ***/
  form = this.fb.group(
    {
      password: [
        '',
        [
          this.validateSvc.sequential([
            Validators.required,
            this.validateSvc.passRegex,
            this.validateSvc.passLength,
          ]),
        ],
      ],
      passConfirm: ['', [this.validateSvc.sequential([Validators.required])]],
    },
    { validator: this.validateSvc.passMatch() }
  );
  get passControl() {
    return this.form.get('password') as FormControl;
  }
  get passConfirmControl() {
    return this.form.get('passConfirm') as FormControl;
  }
  /*** Constructor ***/
  constructor(
    private fb: FormBuilder,
    private validateSvc: FormValidatorService,

  ) {}
  /*** lifecircle ***/
  ngOnInit() {
  }
  ngOnDestroy(): void {
    this.sub$?.unsubscribe();
    this.form.reset();
  }
  /*** ControlValueAccessor ***/
  onTouched = () => {};
  writeValue(obj: any): void {
    // console.log('writeValue-newpass');
    obj && this.form.setValue(obj, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    // console.log('registerOnChange-newpass');
    this.sub$ = this.form.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    // console.log('registerOnTouched-newpass');
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {}
  validate(control: AbstractControl): ValidationErrors | null {
    // console.log('validate-newpass');
    return this.form.valid ? null : { genericError: true };
  }
  /*** ***/
  toggle(elem_: any) {
    const elem = elem_.nativeElement;
    if (elem.type === 'password') {
      elem.type = 'text';
      this.iconEye = 'eye-off-outline';
    } else {
      elem.type = 'password';
      this.iconEye = 'eye-outline';
    }
  }
  controlState(control: any): boolean {
    return this.validateSvc.controlState(control);
  }
}

/* 
!ERROR: Aun no logra hacerse funcionar los metodos del lifecircle ni de angular ni ionic
*/
