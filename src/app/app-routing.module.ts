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
    loadChildren: () => import('./features/public/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'store-a',
    loadChildren: () => import('./features/public/store/store-a/store-a.module').then( m => m.StoreAPageModule)
  },
  {
    path: 'showcase-product/:id',
    loadChildren: () => import('./features/public/showcase/showcase.module').then( m => m.ShowcasePageModule)
  },
  {
    path: 'shopping-cart',
    loadChildren: () => import('./features/public/shopping-cart/shopping-cart.module').then( m => m.ShoppingCartPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./features/public/checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/public/auth/auth.module').then( m => m.AuthModule)
  },
  { path: 'login', redirectTo: '/auth/signin', pathMatch: 'full' },//child-auth 
  { path: 'signup', redirectTo: '/auth/signup', pathMatch: 'full' },//child-auth  
  {
    path: '**',
    loadChildren: () => import('./features/public/error/error.module').then( m => m.ErrorPageModule)
  },
 

 
 


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
