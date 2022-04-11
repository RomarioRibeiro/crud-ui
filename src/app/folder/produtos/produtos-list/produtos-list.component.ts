import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/core/service/alert.service';
import { ToastService } from 'src/app/core/service/toast.service';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.css'],
})
export class ProdutosListComponent implements OnInit {

  produtos: any [] = [];
  constructor(private produtoService: ProdutoService,
    private alert: AlertService,
    private toast: ToastService) { }

  ngOnInit() {

  }
  ionViewDidEnter(){
    this.carregarLista();
   }


  carregarLista() {
    this.produtoService.getAll()
      .then(obj => {
        this.produtos = obj;
      });
  }

  remove(clientes: any) {
    this.alert.showConfirmDelete(clientes.nome, () => this.executeRemove(clientes));
  }

  executeRemove(cliente: any){
    try {
      const index = this.produtos.indexOf(cliente);
      this.produtos.splice(index, 1);
      this.produtoService.delete(cliente.id);

      this.toast.showSucess('Cliente removido com sucesso');
    } catch (error) {
      this.toast.showError('Erro ao remover o cliente');
    }
  }

}
