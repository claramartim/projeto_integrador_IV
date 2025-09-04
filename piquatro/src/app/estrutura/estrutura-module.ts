import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstruturaRoutingModule } from './estrutura-routing-module';
import { Diretiva } from './diretiva/diretiva';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    Diretiva
  ],
  imports: [
    CommonModule,
    EstruturaRoutingModule,
    MatToolbarModule
  ]
})
export class EstruturaModule { }
