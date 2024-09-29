import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { IconModule } from 'src/app/core/icon/icon.module';
import { StandPageRoutingModule } from './stand-routing.module';

import { StandPage } from './stand.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IconModule,
    StandPageRoutingModule
  ],
  declarations: [StandPage]
})
export class StandPageModule {}
