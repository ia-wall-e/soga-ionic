import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/auth/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home/home.module').then( m => m.HomePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
