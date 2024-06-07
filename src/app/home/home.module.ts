import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import {ComponentsModule} from '@myComponents/components.module';


@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage],
 
})
export class HomePageModule {}
