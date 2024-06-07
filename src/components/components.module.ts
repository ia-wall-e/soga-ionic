import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
//=== ===//
import { HeaderComponent } from './header/header.component';
import { CardMiniComponent } from './card/card-mini/card-mini.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { MdCardMiniComponent } from './modulo/md-card-mini/md-card-mini.component';
import { MdSliderOneComponent } from './modulo/md-slider-one/md-slider-one.component';
import { HeaderMinorComponent } from './header-minor/header-minor.component';
import { ProductDetailModule } from './product-detail/product-detail.module';
import {PasswordComponent}from'./forms/password/password.component';
import{MsgErrorComponent}from'./forms/msg-error/msg-error.component';
import{TermsConditionsComponent}from'./terms-conditions/terms-conditions.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderMinorComponent,
    CardMiniComponent,
    CartItemComponent,
    MdCardMiniComponent,
    MdSliderOneComponent,
    PasswordComponent,
    MsgErrorComponent,
    TermsConditionsComponent
  ],
  imports: [CommonModule, IonicModule, ProductDetailModule,RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    HeaderComponent,
    HeaderMinorComponent,
    CardMiniComponent,
    CartItemComponent,
    MdCardMiniComponent,
    MdSliderOneComponent,
    ProductDetailModule,
    PasswordComponent,
    MsgErrorComponent,
    TermsConditionsComponent
  ],
})
export class ComponentsModule {
  constructor() {}
}
