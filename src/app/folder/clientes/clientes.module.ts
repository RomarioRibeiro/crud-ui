import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesCadastroComponent } from './clientes-cadastro/clientes-cadastro.component';
import { ClientesListComponent } from './clientes-list/clientes-list.component';
import { ClientesRoutingModule } from './clientes.routing';



@NgModule({
  declarations: [
    ClientesCadastroComponent,
    ClientesListComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
