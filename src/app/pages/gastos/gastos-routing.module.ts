import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GastosPage } from './gastos.page';

const routes: Routes = [
  {
    path: '',
    component: GastosPage
  },
  {
    path: 'add',
    loadChildren: () => import('./add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GastosPageRoutingModule {}
