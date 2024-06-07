import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoFoundPage } from './no-found.page';

const routes: Routes = [
  {
    path: '',
    component: NoFoundPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoFoundPageRoutingModule {}
