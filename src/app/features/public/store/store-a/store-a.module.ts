import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoreAPageRoutingModule } from './store-a-routing.module';

import { StoreAPage } from './store-a.page';
import { ComponentsModule } from 'src/app/shared/components/components.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoreAPageRoutingModule,
   ComponentsModule
  ],
  declarations: [StoreAPage]
})
export class StoreAPageModule {}
