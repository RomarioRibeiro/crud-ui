import { EmpresaService } from '../empresa.service';
import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/core/service/alert.service';
import { ToastService } from 'src/app/core/service/toast.service';

@Component({
  selector: 'app-empresa-list',
  templateUrl: './empresa-list.component.html',
  styleUrls: ['./empresa-list.component.css'],
})
export class EmpresaListComponent implements OnInit {

  empresas: any [] = [];



  constructor(private empresaService: EmpresaService,
    private alert: AlertService,
    private toast: ToastService) { }

  ngOnInit(): void{
    this.carregarLista();
  }
  ionViewDidEnter(){
    this.carregarLista();
   }


  carregarLista() {
    this.empresaService.getAll()
      .then(obj => {
        this.empresas = obj;
      })
  }

  remove(clientes: any) {
    this.alert.showConfirmDelete(clientes.nome, () => this.executeRemove(clientes));
  }

  executeRemove(cliente: any){
    try {
      const index = this.empresas.indexOf(cliente);
      this.empresas.splice(index, 1);
      this.empresaService.delete(cliente.id);

      this.toast.showSucess('Cliente removido com sucesso');
    } catch (error) {
      this.toast.showError('Erro ao remover o cliente');
    }
  }
}
