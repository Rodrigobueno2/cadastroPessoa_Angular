import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PessoaService {
  apiURL: string = 'http://localhost:9095/api/pessoas';
  //https://crudcrud.com/api/9275278f3f414341826a6b6d4b48138e/pessoas

  constructor(public httpClient: HttpClient) {}

  obterTodasPessoas() {
    return this.httpClient.get(this.apiURL);
  }

  salvarPessoa(pessoa: any) {
    return this.httpClient.post(this.apiURL, pessoa);
  }

  removerpessoa(id: string) {
    return this.httpClient.delete(this.apiURL + '/' + id);
  }

  obterpessoaPorId(id: string) {
    return this.httpClient.get(this.apiURL + '/' + id);
  }

  editarPessoa(pessoa: any, id: string) {
    return this.httpClient.put(this.apiURL + '/' + id, pessoa);
  }
}
