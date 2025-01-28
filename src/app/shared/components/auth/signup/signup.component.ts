import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl } from '@angular/forms';
import { AuthService } from '@myServices/auth.service';

@Component({
  selector: 'app-signup-component',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  standalone:false
})
export class SignupComponent {
signupForm= this.fb.group({
    email: this.fb.control(''),
    password: this.fb.control('')
  });
  get emailControl() {
    return this.signupForm.get('email') as FormControl;
  }
  get passControl() {
    return this.signupForm.get('password') as FormControl;
  }
  constructor(private fb: FormBuilder, private authSvc:AuthService ) { } 
  regWithEmail(form: any) {
    console.log(form.value)
  }
  logWithGoo(){
    this.authSvc.logInWithGoo();
  }


}
