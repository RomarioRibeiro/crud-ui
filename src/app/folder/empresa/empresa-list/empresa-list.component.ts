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

  }
  ionViewDidEnter(){
    this.carregarLista();
  }


  carregarLista() {
    this.empresaService.getAll()
      .then(obj => {
        this.empresas = obj;
      });
  }

  remove(empresa: any) {
    this.alert.showConfirmDelete(empresa.cnpj, () => this.executeRemove(empresa));
  }

  executeRemove(empresas: any){
    try {
      const index = this.empresas.indexOf(empresas);
      this.empresas.splice(index, 1);
      this.empresaService.delete(empresas.id);

      this.toast.showSucess('Empresa removido com sucesso');
    } catch (error) {
      this.toast.showError('Erro ao remover o Empresa');
    }
  }
}
