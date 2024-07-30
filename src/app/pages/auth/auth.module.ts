import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import{EntryPage}from'./entry/entry.page';
import { SignUpPage } from './sign-up/sign-up.page';
import { SignInPage } from './sign-in/sign-in.page';
import { FormModule } from '@myComponents/form/form.module';
const routes: Routes = [
  { path: 'login', component: SignInPage },
  { path: 'registro', component: SignUpPage },
  { path: 'entry', component: EntryPage },
];
@NgModule({
  declarations: [SignUpPage, SignInPage,EntryPage],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    FormModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthModule {}
