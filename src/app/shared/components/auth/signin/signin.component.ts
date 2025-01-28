import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { AuthService } from '@myServices/auth.service';
@Component({
  selector: 'app-signin-component',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  standalone: false
})
export class SigninComponent {

 loginForm = this.fb.group({
    email: this.fb.control(''),
    password: this.fb.control('')
  });
  get emailControl() {
    return this.loginForm.get('email') as FormControl;
  }
  get passControl() {
    return this.loginForm.get('password') as FormControl;
  }
  constructor(private fb: FormBuilder, private authSvc:AuthService ) { }
  logWithEmail(form: any) {
    console.log(form.value)
  }
  logWithGoo(){
    this.authSvc.logInWithGoo();
  }




}
