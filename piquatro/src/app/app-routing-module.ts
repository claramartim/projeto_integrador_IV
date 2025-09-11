import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

{
  path: 'estrutura',
  loadChildren: () => import('./estrutura/estrutura-module').then(m => m.EstruturaModule)
},

{
  path: 'produtos',
  loadChildren: () => import('./produtos/produtos-module').then(m => m.ProdutosModule)
},

{
  path: 'dados',
  loadChildren: () => import('./dados/dados-module').then(m => m.DadosModule)
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
