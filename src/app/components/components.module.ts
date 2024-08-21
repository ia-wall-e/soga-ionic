import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
/*Components*/
import { NavDrawerComponent } from './nav-drawer/nav-drawer.component';
import { HeaderComponent } from './header/header.component';
import { NotificationComponent } from './notification/notification.component';
import{MdCardMiniComponent}from'./modulos/md-card-mini/md-card-mini.component';
import{CardMiniComponent}from'./cards/card-mini/card-mini.component';

@NgModule({
  declarations: [NavDrawerComponent,HeaderComponent,NotificationComponent,MdCardMiniComponent,CardMiniComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports:[NavDrawerComponent,HeaderComponent,NotificationComponent,MdCardMiniComponent,CardMiniComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }

//! Notas: el componente FormComponent tiene su modulo
