import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  standalone: false,
  templateUrl: './diretiva.html',
  styleUrl: './diretiva.css'
})
export class Diretiva {
  
  ListaAlunos = [
    { id: 1, nome: 'Clara', status: 'Ativo', ativo: true },
    { id: 2, nome: 'Arthur', status: 'Inativo', ativo: false },
    { id: 3, nome: 'Roregio', status: 'Ativo', ativo: true },
    { id: 4, nome: 'Willian', status: 'Inativo', ativo: false}
    
    ];

  mostrarLista = true;

  toggleMensagem() {
    this.mostrarLista = !this.mostrarLista;
  }

  tamanhoFonte= 15;

  Somar(){
    if(this.tamanhoFonte < 30) {
        this.tamanhoFonte += 2;
      }
  }

  Subtrair(){
    if(this.tamanhoFonte > 5){
      this.tamanhoFonte -= 2;
  }
  }
    

  get tamanhoFontePx(){
    return `${this.tamanhoFonte}px`;
  }



  }
