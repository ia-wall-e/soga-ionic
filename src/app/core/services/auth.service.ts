import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireSvc:FirebaseService) { }
  logInWithGoo(){
    this.fireSvc.signInWithGoogle();
  }
}
