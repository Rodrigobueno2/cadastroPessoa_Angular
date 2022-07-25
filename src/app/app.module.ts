import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import { ListPessoaComponent } from './pessoa/list-pessoa/list-pessoa.component';
import { FormPessoaComponent } from './pessoa/form-pessoa/form-pessoa.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    FormPessoaComponent,
    ListPessoaComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
