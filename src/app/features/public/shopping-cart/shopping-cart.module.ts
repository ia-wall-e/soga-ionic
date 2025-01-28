import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingCartPageRoutingModule } from './shopping-cart-routing.module';

import { ShoppingCartPage } from './shopping-cart.page';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { WidgetsModule } from 'src/app/shared/widgets/widgets.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingCartPageRoutingModule,
    ComponentsModule,
    WidgetsModule
  ],
  declarations: [ShoppingCartPage]
})
export class ShoppingCartPageModule {}
