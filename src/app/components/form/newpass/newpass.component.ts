import { Component, EventEmitter, OnInit, Output,ViewChild,ElementRef } from '@angular/core';
import { FormControl, FormGroup,  Validators } from '@angular/forms';
import { FormValidatorService } from '@myServices/form-validator.service';

@Component({
  selector: 'app-newpass',
  templateUrl: './newpass.component.html',
  styleUrls: ['./newpass.component.scss'],
})
export class NewpassComponent  implements OnInit {
// @Output() passGroup= new EventEmitter<any>();
@ViewChild('inputPass') inputRef?: ElementRef;
@ViewChild('inputconfirm') confirmRef?: ElementRef;
iconEye: string = 'eye-outline';
passGroup:FormGroup;

get passControl() {
  return this.passGroup.get('password') as FormControl;
}
get passConfirmControl() {
  return this.passGroup.get('passConfirm') as FormControl;
}
  constructor(private validatorSvc: FormValidatorService) {
      this.passGroup= new FormGroup(
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
      )
   }

  ngOnInit() {
    console.log(this.passGroup)
  }
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
}
