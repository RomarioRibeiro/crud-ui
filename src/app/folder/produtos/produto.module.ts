import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { IonicModule } from '@ionic/angular';
import { ProdutosListComponent } from './produtos-list/produtos-list.component';


@NgModule({
  declarations: [
    ProdutosListComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ProdutoRoutingModule
  ]
})
export class ProdutoModule { }
