import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  loginForm = this.fb.group({
    email: '',
    // pass: '',
  });
  get emailControl() {
    return this.loginForm.get('email') as FormControl;
  }

  ngOnInit() {}
  constructor(private fb: FormBuilder) {}
  controlState(control: any): boolean {
    return control.invalid && (control.touched || control.dirty);
  } 
  onSubmit(form: FormGroup){}
}
