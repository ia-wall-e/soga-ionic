import { Injectable } from '@angular/core';
import { Auth,signInWithPopup,GoogleAuthProvider } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private auth$ : Auth) { }
  signInWithGoogle(){
    const provider= new GoogleAuthProvider();
    return signInWithPopup(this.auth$, provider);
  }
}
