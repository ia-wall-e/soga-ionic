import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IsLoggedInGuard, NoLoggedInGuard } from 'src/guards/auth/is-logged-in.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule),
    canActivate:[NoLoggedInGuard]
  },
  {
    path: 'detalles/:id',
    loadChildren: () => import('./product/detalles/detalles.module').then( m => m.DetallesPageModule)
  },
  {
    path: 'catalogo',
    loadChildren: () => import('./catalog/catalog.module').then( m => m.CatalogPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserModule),
    canActivateChild:[IsLoggedInGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./user/user.module').then( m => m.UserModule),
    canActivateChild:[IsLoggedInGuard]
  },
  {
    path: 'exercise',
    loadChildren: () => import('./exercise/exercise.module').then( m => m.ExercisePageModule)
  },
 
  {
    path: 'registro',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./no-found/no-found.module').then( m => m.NoFoundPageModule)
  },  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
