import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CategoriasListComponent } from './categorias-list/categorias-list.component';


@NgModule({
  declarations: [
    CategoriasListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriasRoutingModule
  ]
})
export class CategoriasModule { }
