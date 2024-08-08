import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NavDrawerComponent } from './nav-drawer/nav-drawer.component';



@NgModule({
  declarations: [NavDrawerComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[NavDrawerComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
