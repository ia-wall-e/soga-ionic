import { Component } from '@angular/core';
import { ViewWillEnter, ViewWillLeave } from '@ionic/angular';
import { AuthService } from '@myServices/auth.service';
import { UtilsService } from '@myServices/utils.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.page.html',
  styleUrls: ['./entry.page.scss'],
})
export class EntryPage
  implements ViewWillEnter, ViewWillLeave
{
  private logProvider$?: Subscription;
  testObs$?: Subscription;
  private alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      cssClass: 'alert-button-cancel',
    },
    {
      text: 'OK',
      role: 'confirm',
      cssClass: 'alert-button-confirm',
      handler: () => {
        this.authSvc.signOut();
      },
    },
  ];
  constructor(private authSvc: AuthService, private utilSvc: UtilsService) {}
  /*** LifeCicle */
  ionViewWillEnter(): void {
    // console.log('ENTRY_PAGE');
    // this.testObs$ = this.utilSvc.testObs().subscribe((v) => console.log('Entry - '+v));
  }
  ionViewWillLeave(): void {
    this.cleanPage();
  }
  cleanPage(){
    // console.log('Entry destroy');
    this.logProvider$?.unsubscribe();
    // this.testObs$?.unsubscribe();
  }
  /*** ***/
  providerAction(opt: string) {
    this.logProvider$?.unsubscribe();
    if (opt == 'google') {
      this.logProvider$ = this.authSvc.signInGoogle().subscribe({
        next: (r) => this.handlerNext(r),
        error: (e) => this.handlerError(e),
      });
      // this.authSvc.signInGoogle()
    } else if (opt == 'facebook') {
      this.utilSvc.alert({
        message: 'esta funcion no esta disponible',
        cssClass: 'custom-alert',
        buttons: ['Cerrar'],
      });
    }
  }
  handlerNext(r: any) {
    console.log(r);
  }
  handlerError(e: any) {
    const msg = this.authSvc.errorCode(e);
    const alertDefault = (msg: string) => {
      this.utilSvc.alert({
        message: msg,
        cssClass: 'custom-alert',
        buttons: ['Cerrar'],
      });
    };
    const alertClose = () => {
      this.utilSvc.alert({
        header: 'Hay una sesion abierta',
        message: '¿Deseas cerrar la sesion actual?',
        cssClass: 'custom-alert',
        buttons: this.alertButtons,
      });
    };
    e.code == 'USER_ONLINE' ? alertClose() : alertDefault(msg);
    console.error(e);
  }
  /** ***/
}
