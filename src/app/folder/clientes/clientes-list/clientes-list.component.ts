import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/core/service/alert.service';
import { ToastService } from 'src/app/core/service/toast.service';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {

  clientes: any [] = [];

  constructor(private clientesService: ClientesService,
    private alert: AlertService,
    private toast: ToastService) { }

  ngOnInit(): void {}



  ionViewDidEnter(){
    this.carregarLista();
   }


  carregarLista() {
    this.clientesService.getAll()
      .then(obj => {
        this.clientes = obj;
      });
  }

  remove(clientes: any) {
    this.alert.showConfirmDelete(clientes.nome, () => this.executeRemove(clientes));
  }

  executeRemove(cliente: any){
    try {
      const index = this.clientes.indexOf(cliente);
      this.clientes.splice(index, 1);
      this.clientesService.delete(cliente.id);

      this.toast.showSucess('Cliente removido com sucesso');
    } catch (error) {
      this.toast.showError('Erro ao remover o cliente');
    }
  }

}
