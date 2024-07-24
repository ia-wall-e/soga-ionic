import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormValidatorService } from '@myServices/form-validator.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  loginForm = this.fb.group({
    email: ['', [this.validateSvc.sequential([Validators.required,Validators.email])]],
    pass: ['',[Validators.required]],
  });
  get emailControl() {
    return this.loginForm.get('email') as FormControl;
  }
  get passControl() {
    return this.loginForm.get('pass') as FormControl;
  }
  ngOnInit() {}
  constructor(private fb: FormBuilder, private validateSvc: FormValidatorService) {}
  controlState(control: any): boolean {
    return control.invalid && (control.touched || control.dirty);
  }
  onSubmit(form: FormGroup) {}
}
