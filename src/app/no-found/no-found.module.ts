import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoFoundPageRoutingModule } from './no-found-routing.module';

import { NoFoundPage } from './no-found.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoFoundPageRoutingModule
  ],
  declarations: [NoFoundPage]
})
export class NoFoundPageModule {}
