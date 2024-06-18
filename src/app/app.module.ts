import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';
import { ComponentsModule } from '@myComponents/components.module';
import { RouteReuseStrategy } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { MenuService } from '@myServices/menu.service';
import { NavDrawerComponent } from '@myComponents/nav-drawer/nav-drawer.component';
import { ModalProductComponent } from '@myComponents/modal-product/modal-product.component';
//===firebase===
import { AngularFireModule } from '@angular/fire/compat';
//===swiper===
import { register } from 'swiper/element/bundle';
register();
//=== sqlite capacitor community===
import { defineCustomElements as jeepSqlite } from 'jeep-sqlite/loader';
jeepSqlite(window);
//===
@NgModule({
  declarations: [AppComponent, NavDrawerComponent, ModalProductComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    MenuService,
  ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor() {}
}
