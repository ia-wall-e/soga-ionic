import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreAPage } from './store-a.page';

const routes: Routes = [
  {
    path: '',
    component: StoreAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreAPageRoutingModule {}
