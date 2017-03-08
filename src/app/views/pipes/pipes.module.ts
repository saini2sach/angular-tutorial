import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesRoutingModule } from './pipes-routing.module';
import { HomeComponent } from './home/home.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { AddComponent } from './add/add.component';
import { SubtractComponent } from './subtract/subtract.component';

import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    PipesRoutingModule,
    SharedModule
  ],
  declarations: [HomeComponent, CustomPipeComponent, AddComponent, SubtractComponent]
})
export class PipesModule { }
