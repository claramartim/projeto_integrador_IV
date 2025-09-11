import { Component } from '@angular/core';
import { Produto } from '../Modelo/Produto';

@Component({
  selector: 'app-tabela',
  standalone: false,
  templateUrl: './tabela.html',
  styleUrl: './tabela.css'
})
export class Tabela {

  displayedColumns: string[] = ['nome', 'valor', 'adicionar'];

  dataSource: Produto[] =[
    {nome: 'coca-cola', valor: 10},
    {nome: 'fanta', valor: 8}
  ];
}
