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
import { Subscription } from 'rxjs';
import { ViewWillLeave } from '@ionic/angular';
import { FormValidatorService } from '@myServices/form-validator.service';
import { UtilsService } from '@myServices/utils.service';

@Component({
  selector: 'app-newpass',
  template: `<div class="inputs-section component" [formGroup]="form">
    <div
      class="input-component shape-round label-static"
      [ngClass]="{ isInvalid: controlState(passControl) }"
    >
      <input
        type="password"
        formControlName="password"
        #inputPass
        (blur)="onTouched()"
      />
      <label>Contraseña</label>
      <ion-button
        class="button-io shape-icon fill-none"
        (click)="toggle(inputRef)"
      >
        <ion-icon slot="icon-only" [name]="iconEye"></ion-icon>
      </ion-button>
      <app-msg-error [forControl]="passControl"></app-msg-error>
    </div>
    <div
      class="input-component shape-round label-static"
      [ngClass]="{ isInvalid: controlState(passConfirmControl) }"
    >
      <input
        type="password"
        formControlName="passConfirm"
        (blur)="onTouched()"
      />
      <label>Confirmar Contraseña</label>
      <app-msg-error [forControl]="passConfirmControl"></app-msg-error>
    </div>
  </div>`,
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
  implements OnInit, OnDestroy, ControlValueAccessor, Validator,ViewWillLeave
{
  /*** Propiedades ***/
  @ViewChild('inputPass') inputRef?: ElementRef;
  @ViewChild('inputconfirm') confirmRef?: ElementRef;
  iconEye: string = 'eye-outline';
  private sub$?: Subscription;
  testObs$?: Subscription;
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
    private utilSvc: UtilsService
  ) {}
  /*** lifecircle ***/
  ngOnInit() {
    console.log("NEWPASS_COMPONENT")
    this.testObs$ = this.utilSvc
      .testObs()
      .subscribe((r) => console.log('newpass - ' + r));
  }
  ngOnDestroy():void {
  //  this.clearPage()
   this.sub$?.unsubscribe();
   this.testObs$?.unsubscribe();
    console.log('newpass OnDestroy');
  }
  ionViewWillLeave(): void {
    console.log('newpass ionLeave');
  }
  // clearPage(){
  //   this.sub$?.unsubscribe();
  //   this.testObs$?.unsubscribe();
  // }
  /***  ***/
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
NOTAS:
Para el lifecircle del componente no se ejecutan los metodos de ionic : ViewWillEnter y ViewWillLeave, 
recibo los metodos originales de angular : OnInit y OnDestroy
*/
