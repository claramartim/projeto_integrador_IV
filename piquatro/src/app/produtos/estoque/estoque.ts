import { Component } from '@angular/core';

@Component({
  selector: 'app-estoque',
  standalone: false,
  templateUrl: './estoque.html',
  styleUrl: './estoque.css'
})
export class Estoque {

  Produtos = [
    { nome: 'Notebook', preco: 3500, estoque: 8 },
    { nome: 'Teclado', preco: 200, estoque: 0 },
    { nome: 'Monitor', preco: 1200, estoque: 10}, 
    { nome: 'Mouse', preco: 100, estoque: 0 }


  ];

  mostrarEstoque = true;

  toggleMensagem() {
    this.mostrarEstoque = !this.mostrarEstoque;
  }

}
