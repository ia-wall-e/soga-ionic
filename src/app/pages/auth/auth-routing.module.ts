import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EntryPage } from './entry/entry.page';
import { SignInPage } from './sign-in/sign-in.page';
import { SignUpPage } from './sign-up/sign-up.page';
import { SetPassPage } from './set-pass/set-pass.page';
import { stateOn } from '@myGuards/auth.guard';
const routes: Routes = [
  {
    path: 'entry',
    component: EntryPage,
    // canActivate:[stateOn]
  },
  {
    path:'login',
    component:SignInPage,
    canActivate:[stateOn]
  },
  {
    path:'registro',
    component:SignUpPage,
    canActivate:[stateOn]
  },
  {
    path: 'set-pass',
    component:SetPassPage,
    canActivate:[stateOn]
  },

];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class AuthRoutingModule {}
