import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { pessoas } from '../pessoas/pessoas.model';
@Component({
  selector: 'app-pessoas-detalhe',
  templateUrl: './pessoas-detalhe.component.html',
  styleUrls: ['./pessoas-detalhe.component.css']
})
export class PessoasDetalheComponent implements OnInit {
  @Input() pessoas: pessoas;
  constructor() { }
  @Output() alterar = new EventEmitter();
  pes: pessoas;
  AlterarDados() {
    this.pes = { id: this.pessoas.id, name: "pedro", idade: 18, corOlhos: "castanho Escuro", sexo: "Masculino", email: "pedroaugustopimenta@gmail.com" };
    this.alterar.emit(this.pes);
  }
  ngOnInit(): void {
  }

}

