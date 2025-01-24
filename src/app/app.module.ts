import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
     provideFirebaseApp(() => initializeApp({ projectId: "soga-50a48", appId: "1:600790909088:web:c153e97480701c525f09c5", storageBucket: "soga-50a48.firebasestorage.app", apiKey: "AIzaSyA3pd0GbZeokCAZsLX6mGloI39XRyIGqHo", authDomain: "soga-50a48.firebaseapp.com", messagingSenderId: "600790909088", measurementId: "G-GW8YNX361C" })), 
     provideAuth(() => getAuth()), 
     provideFirestore(() => getFirestore())],
  bootstrap: [AppComponent],
})
export class AppModule {}
