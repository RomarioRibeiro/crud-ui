import { Clientes } from 'src/app/core/models/clientes.model';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/core/service/alert.service';
import { ToastService } from 'src/app/core/service/toast.service';
import { ClientesService } from '../clientes.service';
import { Regex } from 'src/app/core/valideito/regex.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-clientes-cadastro',
  templateUrl: './clientes-cadastro.component.html',
  styleUrls: ['./clientes-cadastro.component.css']
})
export class ClientesCadastroComponent implements OnInit {

  regex = new Regex();
  clientes = new Clientes();
  idcli: string;

  constructor(
    private clientesService: ClientesService,
    private alert: AlertService,
    private toast: ToastService,
    private route: ActivatedRoute,
    private location: Location,
    private title: Title
    ) { }

  ngOnInit() {

    // eslint-disable-next-line @typescript-eslint/dot-notation
    this.idcli = this.route.snapshot.params['id'];
    this.title.setTitle('Cadastro de Cliente');
    if (this.idcli) {
      this.carregarCliente(this.idcli);
    }
    else { }
  }
  carregarCliente(id: string) {
    this.clientesService.getById(id)
      .then(obj => {
        this.clientes = obj;
      });
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  get editando() {
    return Boolean(this.clientes.id);
  }
  async onSubmit() {
    try {
      let result: Clientes;
      if (this.idcli) {
        result = await this.clientesService.update(this.idcli, this.clientes);
        this.toast.showSucess('Cliente atualizado com sucesso');
      } else {
        result = await this.clientesService.create(this.clientes);
        this.toast.showSucess('Cliente cadastrado com sucesso');
      }
      if (result) {
        this.location.back();
      }
    } catch (error) {
      this.toast.showError('Erro ao cadastrar cliente');

    }
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edi????o de Cliente: ${this.clientes.nome}`);
  }
}
