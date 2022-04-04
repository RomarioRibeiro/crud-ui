import { ClientesService } from './../folder/clientes/clientes.service';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmpresaListService } from '../folder/empresa/empresa-list.service';





@NgModule({

  declarations: [],
  imports: [
    RouterModule
  ],
  providers: [
    ClientesService,
    EmpresaListService
  ],
  exports: [],

})
export class CoreModule{}
