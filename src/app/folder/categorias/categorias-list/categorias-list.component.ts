import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/core/service/alert.service';
import { ToastService } from 'src/app/core/service/toast.service';
import { CategoriasService } from '../categorias.service';

@Component({
  selector: 'app-categorias-list',
  templateUrl: './categorias-list.component.html',
  styleUrls: ['./categorias-list.component.css'],
})
export class CategoriasListComponent implements OnInit {

categorias: any [] = [];

  constructor(
    private categoriasService: CategoriasService,
    private alert: AlertService,
    private toast: ToastService
  ) { }

  ngOnInit() {}


  ionViewDidEnter(){
    this.carregarLista();
   }


  carregarLista() {
    this.categoriasService.getAll()
      .then(obj => {
        this.categorias = obj;
      });
  }

  remove(categorias: any) {
    this.alert.showConfirmDelete(categorias.nome, () => this.executeRemove(categorias));
  }

  executeRemove(categoria: any){
    try {
      const index = this.categorias.indexOf(categoria);
      this.categorias.splice(index, 1);
      this.categoriasService.delete(categoria.id);

      this.toast.showSucess('Cliente removido com sucesso');
    } catch (error) {
      this.toast.showError('Erro ao remover o cliente');
    }
  }

}
