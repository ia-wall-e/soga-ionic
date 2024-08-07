import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ViewWillLeave } from '@ionic/angular';
import { AuthService } from '@myServices/auth.service';
import { UtilsService } from '@myServices/utils.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-set-pass',
  templateUrl: './set-pass.page.html',
  styleUrls: ['./set-pass.page.scss'],
})
export class SetPassPage implements OnInit,OnDestroy, ViewWillLeave {
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
  private goLogin = [
    {
      text: 'OK',
      role: 'confirm',
      cssClass: 'alert-button-confirm',
      handler: () => {
        this.utilSvc.route('/login');
      },
    },
  ];
  private sub?: Subscription;
  /*** ***/
  resetForm = this.fb.group({
    email: ['',[Validators.required,Validators.email]],
  });
  get emailControl(){
    return this.resetForm.get('email') as FormControl;
  }
  /*** ***/
  constructor(
    private authSvc: AuthService,
    private fb: FormBuilder,
    private utilSvc: UtilsService
  ) {}
  /*** ***/
  ngOnInit() {}
  ngOnDestroy() {
    console.log('set-pass OnDEstroy');
   this.cleanUp()
  }
  ionViewWillLeave(){
    console.log('set-pass Leave');
    this.cleanUp()
  }
  private cleanUp(){
    this.sub?.unsubscribe();
  }
  /*** ***/
  onSubmit(form: FormGroup) {
    const email = form.get('email')?.value as string;
    this.sub = this.utilSvc
      .withLoading(this.authSvc.resetPass(email))
      .subscribe({
        next: (r) => this.handlerNext(r),
        error: (e) => this.handlerError(e),
      });
  }
  handlerNext(r: any) {
    this.utilSvc.alert({
      message: 'Hemos enviado a tu correo el link para recuperar tu contraseña',
      cssClass: 'custom-alert',
      buttons: this.goLogin,
    });
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
}
