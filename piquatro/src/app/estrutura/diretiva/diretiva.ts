import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  standalone: false,
  templateUrl: './diretiva.html',
  styleUrl: './diretiva.css'
})
export class Diretiva {

  ListaAlunos = [
    { id: 1, nome: 'Clara', status: 'ativo' },
    { id: 2, nome: 'Arthur', status: 'ativo' },
    { id: 3, nome: 'Roregio', status: 'inativo' },
    { id: 4, nome: 'Willian', status: 'inativo'}
    
    ];

  mostrarLista = true;

  toggleMensagem() {
    this.mostrarLista = !this.mostrarLista;
  }
  }
