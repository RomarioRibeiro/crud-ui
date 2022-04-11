import { ClientesService } from './../folder/clientes/clientes.service';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmpresaService } from '../folder/empresa/empresa.service';
import { ProdutoService } from '../folder/produtos/produto.service';
import { CategoriasService } from '../folder/categorias/categorias.service';






@NgModule({

  declarations: [],
  imports: [
    RouterModule
  ],
  providers: [
    ClientesService,
    EmpresaService,
    ProdutoService,
    CategoriasService
  ],
  exports: [],

})
export class CoreModule{}
