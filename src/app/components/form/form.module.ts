import {NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { MsgErrorComponent } from './msg-error/msg-error.component';
import{NewpassComponent}from'./newpass/newpass.component';

import{SigninComponent}from'./signin/signin.component';
@NgModule({
  declarations: [MsgErrorComponent,NewpassComponent,SigninComponent],
  imports: [CommonModule,IonicModule,ReactiveFormsModule],
  exports:[MsgErrorComponent,NewpassComponent,SigninComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class FormModule { }
