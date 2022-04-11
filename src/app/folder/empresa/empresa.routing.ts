
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresaCadastroComponent } from './empresa-cadastro/empresa-cadastro.component';
import { EmpresaListComponent } from './empresa-list/empresa-list.component';

const routes: Routes = [
  {
    path: '',
    component: EmpresaListComponent
  },
  {
    path: 'novo',
    component:  EmpresaCadastroComponent
  },
  {
    path: ':id',
    component:  EmpresaCadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpresaRoutingModule{}
