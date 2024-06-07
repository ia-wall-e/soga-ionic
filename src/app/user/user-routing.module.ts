import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilePage } from './profile/profile.page';
import { IsLoggedInGuard } from '@myGuards/auth/is-logged-in.guard';

const routes: Routes = [
  {
    path: 'perfil',
    component: ProfilePage,
    canActivate:[IsLoggedInGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
