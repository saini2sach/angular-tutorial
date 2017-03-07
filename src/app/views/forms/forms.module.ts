import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsRoutingModule } from './forms-routing.module';
import { HomeComponent } from './home/home.component';
import { TemplateComponent } from './template/template.component';
import { ModelComponent } from './model/model.component';

import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsRoutingModule
  ],
  declarations: [HomeComponent, TemplateComponent, ModelComponent]
})
export class FormsModule { }
