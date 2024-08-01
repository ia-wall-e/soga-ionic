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
  /* signInGoogle como Promise*/
  // signInGoogle() {
  //   const provider = new GoogleAuthProvider();
  //   provider.setCustomParameters({ prompt: 'select_account' });
    /* Validacion en un popup */
  //   return signInWithPopup(getAuth(), provider)
  //     .then((result) => {
  //       // Entrega un token de acceso de google. se puede usar para acceder Google API.
  //       const credential = GoogleAuthProvider.credentialFromResult(result);
  //       const token = credential?.accessToken;
  //       // datos user.
  //       const user = result.user;
  //       console.log(user);
  //       return result;
  //       // IdP data available using getAdditionalUserInfo(result)
  //       // ...
  //     })
  //     .catch((error) => {
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // The email of the user's account used.
  //       const email = error.customData.email;
  //       // The AuthCredential type that was used.
  //       const credential = GoogleAuthProvider.credentialFromError(error);
  //       // ...
  //     });
  // }
  /* signInGoogle como Observable */
  signInGoogle(): Observable<any> {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    return defer(() =>
      from(signInWithPopup(getAuth(), provider)).pipe(
        map((auth) => {
          const credential = GoogleAuthProvider.credentialFromResult(auth);
          const token = credential?.accessToken;
          console.log(auth)
          return auth;
        }),
        catchError((err) => {
          console.log(err);
          return of('Valor alternativo');
        })
      )
    );
  }
  /*** ***/
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
  authState(): Observable<any> {
    return this.fbAuth.authState;
  }
}
