import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from '@firebase/auth';
import { RegisterCredentials } from '@myInterfaces/user-credentials';
import { Observable, defer, catchError, from, map,of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  //#region Auth-Branch 
  constructor(private fbAuth: AngularFireAuth) {}
  /*** ***/
  signUp(user: RegisterCredentials) {
    return this.fbAuth.createUserWithEmailAndPassword(
      user.email,
      user.password
    );
  }
  signIn(user: RegisterCredentials) {
    return this.fbAuth.signInWithEmailAndPassword(user.email, user.password);
  }
  signInGoogle(): Observable<any> {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    return defer(() =>
      from(signInWithPopup(getAuth(), provider)).pipe(
        map((auth) => {
          const credential = GoogleAuthProvider.credentialFromResult(auth);
          const token = credential?.accessToken;
          return auth;
        }),
        catchError((err) => {
          console.error(err);
          return of(null);
        })
      )
    );
  }
  signInFace() {
    const provider = new FacebookAuthProvider();
    provider.setCustomParameters({
      display: 'popup',
    });
    signInWithPopup(getAuth(), provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential?.accessToken;

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        console.error(error);
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        // ...
      });
  }
  signOut() {
    this.fbAuth
      .signOut()
      .then((r) => console.log('se cerro la sesion'))
      .catch((e) => console.log(e));
  }
  /*** ***/
  resetPass(email:string){
  return this.fbAuth.sendPasswordResetEmail(email)
  }
  /*** ***/
  authState(): Observable<any> {
    return this.fbAuth.authState;
  }
  //#endregion
}
