import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListPessoaComponent } from './pessoa/list-pessoa/list-pessoa.component';
import { FormPessoaComponent } from './pessoa/form-pessoa/form-pessoa.component';


const routes: Routes = [
  { path: 'pessoa', component: ListPessoaComponent  },
  { path: 'pessoa/:id', component: FormPessoaComponent },
  { path: '', redirectTo: '/pessoa', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
