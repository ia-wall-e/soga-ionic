import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
/*Components*/
import { NavDrawerComponent } from './nav-drawer/nav-drawer.component';
import { HeaderComponent } from './header/header.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [NavDrawerComponent,HeaderComponent,NotificationComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports:[NavDrawerComponent,HeaderComponent,NotificationComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }

//! Notas: el componente FormComponent tiene su modulo
