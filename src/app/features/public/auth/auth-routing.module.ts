import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninPage } from './signin/signin.page';
import { SignupPage } from './signup/signup.page';

const routes: Routes = [
  {
    path: 'signin',
    component: SigninPage
  },
  {
    path: 'signup',
    component: SignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
