import { Injectable } from '@angular/core';
import {
  LoadingController,
  ToastController,
  ToastOptions,
  AlertOptions,
  AlertController
} from '@ionic/angular';
import { Observable, finalize, from, switchMap, catchError } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  //#region Auth-Branch 
  /*** ***/
  private loading: HTMLIonLoadingElement | null = null;
  /*** ***/
  constructor(
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private router : Router
  ) {}
  /*** ***/
  async presentToast(opts: ToastOptions) {
    const toast = await this.toastCtrl.create(opts);
    toast.present();
  }
  /*** ***/
  async alert(opts?:AlertOptions){
    const alert= await this.alertCtrl.create(opts);
    alert.present();
  }
  /*** ***/
  async present() {
    this.loading = await this.loadingCtrl.create({ spinner: 'crescent',backdropDismiss:false });
    await this.loading.present();
  }
  async dismiss() {
    if (this.loading) {
      await this.loading.dismiss();
      this.loading = null;
    }
  }
  withLoading<T>(observable: Observable<T>): Observable<T> {
    return from(this.present()).pipe(
      switchMap(() => observable.pipe(finalize(() => this.dismiss()))),
      catchError((err) => {
        this.dismiss();
        throw err;
      })
    );
  }
  /*** Router ***/
  route(path:string){
    this.router.navigate([path]);
  }
  /*** Test ***/
  testObs():Observable<any>{
  return new Observable(subscriber=>{
      let contador = 0;
      let tiemoutId:any;
    tiemoutId=  setInterval(() => {
        contador++;
        subscriber.next(contador)
      }, 1000);
      return () => clearTimeout(tiemoutId);
    });
   }
   //#endregion 
}
