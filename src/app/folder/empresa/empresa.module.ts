import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { EmpresaListComponent } from './empresa-list/empresa-list.component';
import { EmpresaRoutingModule } from './empresa.routing';
import { EmpresaCadastroComponent } from './empresa-cadastro/empresa-cadastro.component';


@NgModule({
  declarations: [
    EmpresaListComponent,
    EmpresaCadastroComponent

  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    EmpresaRoutingModule
  ]
})
export class EmpresaModule { }
