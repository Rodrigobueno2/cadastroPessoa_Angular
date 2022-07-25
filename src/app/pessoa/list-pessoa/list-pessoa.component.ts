import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../pessoa.service';

@Component({
  selector: 'app-list-pessoa',
  templateUrl: './list-pessoa.component.html',
  styleUrls: ['./list-pessoa.component.css'],
})
export class ListPessoaComponent implements OnInit {
  pessoas: any[];
  listando: boolean = false;

  constructor(public pessoaService: PessoaService) {}

  ngOnInit() {
    this.listarPessoas();
  }

  remover(id: string) {
    this.pessoaService.removerpessoa(id).subscribe({
      next: (body) => {
        this.listarPessoas();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  listarPessoas() {
    this.listando = true;
    this.pessoaService.obterTodasPessoas().subscribe((result: any[]) => {
      this.pessoas = result;
      this.listando = false;
    });
  }
}
