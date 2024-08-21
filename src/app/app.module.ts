import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
/* HttpClient*/
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
/*firebase*/
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
/*rutas y modulos*/
import { AuthModule } from './pages/auth/auth.module';
import { ComponentsModule } from '@myComponents/components.module';
/*otro*/
import { AppRoutingModule } from './app-routing.module';
/**/
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AuthModule,
    ComponentsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AppRoutingModule,
  ],
  providers: [provideHttpClient(withInterceptorsFromDi()),{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
/*
!NOTAS:
! - appRoutingModule, va de ultima entre las importacionde de modulos con rutas
*/
