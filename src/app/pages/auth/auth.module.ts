import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthRoutingModule } from './auth-routing.module';
import{EntryPage}from'./entry/entry.page';
import { SignUpPage } from './sign-up/sign-up.page';
import { SignInPage } from './sign-in/sign-in.page';
import { SetPassPage } from './set-pass/set-pass.page';
import { FormModule } from '@myComponents/form/form.module';

@NgModule({
  declarations: [SignUpPage, SignInPage,EntryPage,SetPassPage],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    AuthRoutingModule,
    FormModule,
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthModule {}
