import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
/*Animaciones de angular para HTML*/ 
/* HttpClient*/
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
/*firebase*/
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
/*icons*/
import { IconModule } from './core/icon/icon.module';
/*rutas y modulos*/
import { AuthModule } from './pages/auth/auth.module';
import { ComponentsModule } from '@myComponents/components.module';
/*otro*/
import { AppRoutingModule } from './app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
/**/
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { apiProgressInterceptor } from 'src/app/interceptors/api-progress.interceptor';
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
    IconModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideAnimationsAsync(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: apiProgressInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
/*
!NOTAS:
! - appRoutingModule, va de ultima entre las importacionde de modulos con rutas
*/
