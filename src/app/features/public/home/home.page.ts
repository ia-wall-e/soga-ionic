import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/core/services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  loginForm = this.fb.group({
    email: this.fb.control(''),
    password: this.fb.control('')
  });
  constructor(private fb: FormBuilder, private fireSvc: FirebaseService) { }
  logWithEmail(form: any) {
    console.log(form)
  }
  logWithGoo(){
    this.fireSvc.signInWithGoogle();
  }
}
