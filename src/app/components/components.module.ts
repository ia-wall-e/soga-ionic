import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NavDrawerComponent } from './nav-drawer/nav-drawer.component';
import { RouterModule } from '@angular/router';
/*Pipes*/ 
import { ParseToArrayPipe } from '../pipes/parse-to-array.pipe';


@NgModule({
  declarations: [NavDrawerComponent,ParseToArrayPipe],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports:[NavDrawerComponent,ParseToArrayPipe],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
