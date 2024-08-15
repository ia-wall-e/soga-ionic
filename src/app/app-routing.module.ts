import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'entry',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '**',//Ruta comodin-siempre va de ultimo
    loadChildren: () => import('./pages/error/error/error.module').then( m => m.ErrorPageModule)
  },  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
/*
!Nota
!paths : entry, login, registro -> authModule, importado a appModule.
*/