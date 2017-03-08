import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { SubtractComponent } from './subtract/subtract.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [{
    path: '',
    redirectTo: 'add',
    pathMatch: 'full'
  }, {
    path: 'add',
    component: AddComponent
  },{
    path: 'subtract',
    component: SubtractComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PipesRoutingModule { }
