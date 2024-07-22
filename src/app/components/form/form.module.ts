import {NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { MsgErrorComponent } from './msg-error/msg-error.component';
import{NewpassComponent}from'./newpass/newpass.component';

@NgModule({
  declarations: [MsgErrorComponent,NewpassComponent],
  imports: [CommonModule,IonicModule,ReactiveFormsModule],
  exports:[MsgErrorComponent,NewpassComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class FormModule { }
