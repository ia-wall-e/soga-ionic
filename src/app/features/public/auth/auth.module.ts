import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SigninPage } from './signin/signin.page';
import { SignupPage } from './signup/signup.page';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { AuthRoutingModule } from './auth-routing.module';


@NgModule({
  declarations: [SigninPage,SignupPage],
  imports: [
    CommonModule,
    IonicModule,
    AuthRoutingModule,
    ComponentsModule,
  ]
})
export class AuthModule { }
