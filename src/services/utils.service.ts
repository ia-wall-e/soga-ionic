import { Injectable, inject } from '@angular/core';
import {
  LoadingController,
  ToastController,
  ToastOptions,
  AlertController,
  AlertOptions
} from '@ionic/angular';
import { Router } from '@angular/router';
import { Observable, Subject, finalize } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  loadingController = inject(LoadingController);
  toastCtrl = inject(ToastController);
  alertCtrl=inject(AlertController);
  routerInj = inject(Router);
  //#===Propiedades===//
  private loading: HTMLIonLoadingElement | null = null;
  //#===Loading===//
  // loading() {
  //   return this.loadingCtrl.create({ spinner: 'crescent' });
  // }
  async present() {
    this.loading = await this.loadingController.create({ spinner: 'crescent' });
    await this.loading.present();
  }
  async dismiss() {
    if (this.loading) {
      await this.loading.dismiss();
      this.loading = null;
    }
  }
  withLoading<T>(observable: Observable<any>): Observable<any> {
    return new Observable(observer => {
      this.present()
        .then(() => {
          observable.pipe(
            finalize(() => this.dismiss())
          ).subscribe({
            next: (data) => observer.next(data),
            error: (err) => observer.error(err),
            complete: () => observer.complete()
          });
        })
        .catch(err => {
          this.dismiss();
          observer.error(err);
        });
    });
  }
  //#===Toast===//
  /*
 opts:{
    message: 'Your settings have been saved.',
    duration: 2000
 }
*/
  async presentToast(opts?: ToastOptions) {
    const toast = await this.toastCtrl.create(opts);
    toast.present();
  }
  //#===Alert===//
  async alert(opts?:AlertOptions){
    const alert= await this.alertCtrl.create(opts);
    alert.present();
  }
  //#===Router===//
  myRouterLink(url: string) {
    return this.routerInj.navigateByUrl(url);
  }
  //#===Data In Storage===//
  saveStorage(key: string, data: any) {
    if (typeof data == 'object') {
      data = JSON.stringify(data);
    }
    return localStorage.setItem(key, data);
  }
  getStorage(key: string) {
    let data = localStorage.getItem(key);
    if(data){
      data = JSON.parse(data);
      return data;
    }else{
      return null
    }
  }
  
}
