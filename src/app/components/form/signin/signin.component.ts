import {
  Component,
  OnInit,
  OnDestroy,
  forwardRef,
  ViewChild,
  ElementRef,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  Validators,
} from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { FormValidatorService } from '@myServices/form-validator.service';
import { UtilsService } from '@myServices/utils.service';
import { ViewWillLeave } from '@ionic/angular';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SigninComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => SigninComponent),
      multi: true,
    },
  ],
})
export class SigninComponent
  implements OnInit, OnDestroy, ControlValueAccessor, Validator,ViewWillLeave
{
  /*** ***/
  private sub$?: Subscription;
  private testObs$ = new Subscription();
  @ViewChild('inputPass') inputRef?: ElementRef;
  iconEye = 'eye-outline';
  /*** ***/
  constructor(
    private fb: FormBuilder,
    private validateSvc: FormValidatorService,
    private utilSvc: UtilsService
  ) {}
  form = this.fb.group({
    email: [
      '',
      [this.validateSvc.sequential([Validators.required, Validators.email])],
    ],
    password: ['', [this.validateSvc.sequential([Validators.required])]],
  });
  get emailControl() {
    return this.form.get('email') as FormControl;
  }
  get passControl() {
    return this.form.get('password') as FormControl;
  }
  ngOnInit() {
    // this.testObs$ = this.utilSvc.testObs().subscribe((r) => console.log("singInComponent - "+r));
  }
  ngOnDestroy() {
    console.log("singInComponentReutilizable - destroy");
    this.cleanUp();
  }
  ionViewWillLeave(): void {
    console.log("singInComponentReutilizable - leave");
    this.cleanUp();
  }
  private cleanUp(){
    this.testObs$.unsubscribe();
    this.form.reset();
  }
  /*** ***/
  onTouched = () => {};
  writeValue(obj: any): void {
    obj && this.form.setValue(obj, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    this.sub$ = this.form.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {}
  validate(control: AbstractControl): ValidationErrors | null {
    return this.form.valid ? null : { genericError: true };
  }
  /*** ***/
  controlState(control: any): boolean {
    return this.validateSvc.controlState(control);
  }

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
}
