import { Component, inject, OnInit } from '@angular/core';
import { Device } from '@capacitor/device';
import { Platform } from '@ionic/angular';
import { AuthService } from '@myServices/auth.service';
import { SqliteService } from '@myServices/sqlite.service';
import { StorageService } from '@myServices/storage.service';
import { ShoppingCartService } from '@myServices/shopping-cart.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  authSvc = inject(AuthService);
  sqliteSvc = inject(SqliteService);
  storageSvc = inject(StorageService);
  cartSvc = inject(ShoppingCartService);
  private platform = inject(Platform);
  //#
  authSubs: Subscription;
  isWeb: boolean = false;
  constructor() {
    this.initSession();
  }
  ngOnInit() {
    // this.initStorage();
  }
  ngOnDestroy() {
    this.authSubs.unsubscribe();
  }
  initSession() {
    console.log('Usuario iniciado');
    this.authSubs = this.authSvc.authState().subscribe((user) => {
      user ? console.info(user) : console.info('User:' + user);
    });
  }
  //sqlite
  initDb() {
    this.platform.ready().then(async () => {
      const type = await Device.getInfo();
      this.isWeb = type.platform == 'web';
      this.sqliteSvc.initDbLocal();
      this.sqliteSvc.dbReady.subscribe((x) => {
        console.log(x);
      });
    });
  }
  //ionic storage
  async initStorage() {
    try {
      await this.storageSvc.init();
      await this.cartSvc.initCart();
    } catch (err) {
      console.log(err);
    }
  }
}
