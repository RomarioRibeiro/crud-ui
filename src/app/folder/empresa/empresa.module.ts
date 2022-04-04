import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { EmpresaListComponent } from './empresa-list/empresa-list.component';
import { EmpresaRoutingModule } from './empresa.routing';


@NgModule({
  declarations: [
    EmpresaListComponent,

  ],
  imports: [
    CommonModule,
    IonicModule,
    EmpresaRoutingModule
  ]
})
export class EmpresaModule { }
