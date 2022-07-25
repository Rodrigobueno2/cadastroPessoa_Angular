import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaService } from '../../pessoa.service';

@Component({
  selector: 'app-form-pessoa',
  templateUrl: './form-pessoa.component.html',
  styleUrls: ['./form-pessoa.component.css'],
})
export class FormPessoaComponent implements OnInit {
  public editar: boolean = false;
  public loading: boolean = false;

  constructor(
    public fb: FormBuilder,
    public router: Router,
    public activedRoute: ActivatedRoute, 
    public pessoaService: PessoaService
  ) {}

  ngOnInit(): void {
    if (this.activedRoute.snapshot.params['id'] != 'novo') {
      this.editar = true;
      this.pessoaService
        .obterpessoaPorId(this.activedRoute.snapshot.params['id'])
        .subscribe((result: any) => {
          this.pessoaFormGroup.patchValue(result, { emitEvent: false });
        });
    }
  }

  pessoaFormGroup = this.fb.group({
    nome: ['', [Validators.required]],
    cpf: ['', [Validators.required]],
    dataNascimento: ['', [Validators.required]],
    contatos: [[]],
  });

  contatosFormGroup = this.fb.group({
    nome: ['', [Validators.required]],
    telefone: ['', [Validators.required]],
    email: ['', [Validators.email, Validators.required]],
  });

  addContato() {
    if (this.contatosFormGroup.valid) {
      this.pessoaFormGroup
        .get('contatos')
        ?.value.push(this.contatosFormGroup.value);
      this.pessoaFormGroup.get('contatos')?.updateValueAndValidity();
    }
  }

  getErrorMessage(control: any) {
    if (control.errors) {
      switch (Object.keys(control.errors)[0]) {
        case 'required':
          return 'Campo requerido';
        case 'minlength':
          return `Tamanho mínimo é de ${control.errors.minlength.requiredLength} e o tamanho atual é ${control.errors.minlength.actualLength}`;
        case 'max':
          return `Valor maximo é de ${control.errors.max.max} `;
        case 'min':
          return `Valor mínimo é de ${control.errors.min.min} `;
        case 'email':
          return `Email invalido`;
        default:
          return null;
      }
    }
    return null;
  }

  adicionar() {
    this.loading = true;
    this.pessoaService
      .salvarPessoa(this.pessoaFormGroup.value)
      .subscribe((result) => {
        this.router.navigate(['/pessoa']);
        this.loading = false;
      });
    this.pessoaFormGroup.reset();
  }

  atualizarPessoa() {
    this.loading = true;
    this.pessoaService
      .editarPessoa(
        this.pessoaFormGroup.value,
        this.activedRoute.snapshot.params['id']
      )
      .subscribe((result) => {
        this.router.navigate(['/pessoa']);
        this.loading = false;
      });
  }
}
