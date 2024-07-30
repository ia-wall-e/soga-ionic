import { Component, OnInit } from '@angular/core';
import { errorsDictionary } from '@myComponents/form/msg-error/error-dictionary';
import { AuthService } from '@myServices/auth.service';
import { UtilsService } from '@myServices/utils.service';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.page.html',
  styleUrls: ['./entry.page.scss'],
})
export class EntryPage implements OnInit {
  constructor(private authSvc: AuthService,private utilSvc:UtilsService) {}
  ngOnInit() {}
  providerAction(opt: string) {
    try{
      if (opt == 'google') {
        this.authSvc.signInGoogle()
      } else if (opt == 'facebook') {
        this.utilSvc.alert({
          message: "esta funcion no esta disponible",
          cssClass: 'custom-alert',
          buttons: ['Cerrar'],
        })
      }
    }catch(e){
      const msg = this.authSvc.errorCode(e);
      this.utilSvc.alert({
        message: msg,
        cssClass: 'custom-alert',
        buttons: ['Cerrar'],
      })
      console.error(e);
    }
   
  }

}
