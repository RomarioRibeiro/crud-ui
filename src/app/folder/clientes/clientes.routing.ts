import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesCadastroComponent } from './clientes-cadastro/clientes-cadastro.component';
import { ClientesListComponent } from './clientes-list/clientes-list.component';


const routes: Routes = [
  {
    path: '',
    component: ClientesListComponent
  },
  {
    path: 'novo',
    component: ClientesCadastroComponent
  },
  {
    path: ':id',
    component: ClientesCadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesRoutingModule{}
