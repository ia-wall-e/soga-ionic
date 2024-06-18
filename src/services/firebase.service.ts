import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
  User,
  onAuthStateChanged,
} from 'firebase/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getFirestore, setDoc, getDoc, doc } from '@angular/fire/firestore';
import { Observable, Observer, map } from 'rxjs';
import { UtilsService } from './utils.service';
import {
  LoginCredentials,
  RegisterCredentials,
} from '@myInterfaces/user-credentials';
@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  fireStore = inject(AngularFirestore);
  afAuth = inject(AngularFireAuth);
  utilSvc = inject(UtilsService);
  data:User;
  //#---Autenticacion---//
  getAuth() {
    return getAuth();
  }
  //#---Acceder=---//
  signInEmail(user: LoginCredentials) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  //#---Cerrar sesion---//
  signOut() {
    getAuth().signOut();
  }
  //#---=Crear---//
  signUpEmail(user: RegisterCredentials) {
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password);
  }
  //#---Actualizar Data Usuario---//
  //¡set alias user
  updateUser(displayName: string) {
    return updateProfile(getAuth().currentUser, { displayName });
  }
  //#---DataBase---//
  //¡Guardar data
  setDataUser(path: string, data: any) {
    const dataUser = setDoc(doc(getFirestore(), path), data);
    return dataUser;
  }
  //¡Obtener data
  async getDataUser(path: string) {
    try {
      const docRef = doc(getFirestore(), path);
      const dataUser = await getDoc(docRef);
      if (dataUser.exists()) {
        return dataUser.data();
      } else {
        throw new Error();
      }
    } catch (err) {
      throw Error('No data found');
    }
  }
  //#---Recovery Credentials---//
  sendRecoveryEmail(email: string) {
    return sendPasswordResetEmail(getAuth(), email);
  }
  //#---persistencia sesion---//
  //¡local
  persistenceSession() {
    this.afAuth
      .setPersistence('local')
      .then(() => {
        console.info('Persistencia de sesion configurada');
      })
      .catch((err) => {
        console.error('Error en la configuracion del a persistencia de sesion');
      });
  }
  //#---estado de usuario---//
  authState(): Observable<any> {
    return this.afAuth.authState;
  }
}
