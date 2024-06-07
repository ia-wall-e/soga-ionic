import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuService } from '@myServices/menu.service';
import { NavDrawerComponent } from '@myComponents/nav-drawer/nav-drawer.component';
import{ModalProductComponent}from'@myComponents/modal-product/modal-product.component';
import { ComponentsModule } from '@myComponents/components.module';
import { environment } from 'src/environments/environment';
//===firebase===
import { AngularFireModule } from '@angular/fire/compat';
//===swiper===
import { register } from 'swiper/element/bundle';
register();
@NgModule({
  declarations: [AppComponent, NavDrawerComponent,ModalProductComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
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
})
export class AppModule {
  constructor(){}
}
