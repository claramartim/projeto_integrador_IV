import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  standalone: false,
  templateUrl: './diretiva.html',
  styleUrl: './diretiva.css'
})
export class Diretiva {

  ListaAlunos = [ 'Clara', 'Arthur', 'Thais', 'Gustavo'];

  mostarMensagem = true;

  toggleMensagem() {
    this.mostarMensagem =!this.mostarMensagem;
  }
}