import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'buttons',
    loadChildren: () => import('./pages/componentsUI/buttons/buttons.module').then( m => m.ButtonsPageModule)
  },
  {
    path: 'stand',
    loadChildren: () => import('./pages/stand/stand.module').then( m => m.StandPageModule)
  },

  // {
  //   path: '**',//Ruta comodin-siempre va de ultimo
  //   loadChildren: () => import('./pages/error/error/error.module').then( m => m.ErrorPageModule)
  // },

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