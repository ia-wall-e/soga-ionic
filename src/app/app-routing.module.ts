import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'entry',
    pathMatch: 'full'
  },
  {
    path: '**',//Ruta comodin-siempre va de ultimo
    loadChildren: () => import('./pages/error/error/error.module').then( m => m.ErrorPageModule)
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
!paths : Entry, login, registro -> authModule, importado a appModule.
*/