import { Component, OnInit } from '@angular/core';
import { pessoas } from './pessoas.model';
import { PessoasService } from '../pessoas.service'
@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent implements OnInit {
  pessoasArray: pessoas[] = [];

  detalhePessoa: boolean = false;
  pessoas: pessoas;

  AlterarPessoa(pessoa) {
    this.PessoasService.AlterarPessoa(pessoa);
    this.detalhePessoa = false;

  }

  DetalheDaPessoa(id) {
    console.log(id);
    this.detalhePessoa = true;
    this.pessoasArray.forEach(pessoas => {
      if (pessoas.id == id) {
        this.pessoas = pessoas;
        console.log(pessoas);
      }
    })
  }

  constructor(private PessoasService: PessoasService) { };

  ngOnInit(): void {
    this.pessoasArray = this.PessoasService.getPessoas();
    console.log(this.pessoasArray);
  }



}
