import { Injectable } from '@angular/core';
import{AngularFireAuth}from'@angular/fire/compat/auth';
import { getAuth,createUserWithEmailAndPassword} from '@firebase/auth';
import { RegisterCredentials } from '@myInterfaces/user-credentials';
import{Observable}from'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private fbAuth: AngularFireAuth){} 
  signUp(user: RegisterCredentials) {
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password);
  }
  signIn(){

  }
  authState(): Observable<any> {
    return this.fbAuth.authState;
  }
}
