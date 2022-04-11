import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Empresa } from 'src/app/core/models/empresas';
import { AlertService } from 'src/app/core/service/alert.service';
import { ToastService } from 'src/app/core/service/toast.service';
import { EmpresaService } from '../empresa.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-empresa-cadastro',
  templateUrl: './empresa-cadastro.component.html',
  styleUrls: ['./empresa-cadastro.component.css'],
})
export class EmpresaCadastroComponent implements OnInit {
  empresa = new Empresa();
  idcli: string;

  constructor(
    private empresaService: EmpresaService,
    private alert: AlertService,
    private toast: ToastService,
    private route: ActivatedRoute,
    private location: Location,
    private title: Title
    ) { }

  ngOnInit() {

    // eslint-disable-next-line @typescript-eslint/dot-notation
    this.idcli = this.route.snapshot.params['id'];
    this.title.setTitle('Empresa de Atulizado');
    if (this.idcli) {
      this.carregarCliente(this.idcli);
    }
    else { }
  }
  carregarCliente(id: string) {
    this.empresaService.getById(id)
      .then(obj => {
        this.empresa = obj;
      });
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  get editando() {
    return Boolean(this.empresa.id);
  }
  async onSubmit() {
    try {
      let result: Empresa;
      if (this.idcli) {
        result = await this.empresaService.update(this.idcli, this.empresa);
        this.toast.showSucess('Empresa atualizado com sucesso');
      } else {
        result = await this.empresaService.create(this.empresa);
        this.toast.showSucess('Empresa cadastrado com sucesso');
      }
      if (result) {
        this.location.back();
      }
    } catch (error) {
      this.toast.showError('Erro ao cadastrar Empresa');

    }
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de Empresa: ${this.empresa.cnpj}`);
  }
}
