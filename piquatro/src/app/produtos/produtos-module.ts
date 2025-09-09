import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProdutosRoutingModule } from './produtos-routing-module';
import { Estoque } from './estoque/estoque';



@NgModule({
  declarations: [
    Estoque
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    MatToolbarModule
  ]
})
export class ProdutosModule { }
