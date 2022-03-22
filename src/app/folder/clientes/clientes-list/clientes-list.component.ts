import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {

  clientes = [];

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.carregarLista();
  }

  carregarLista(){
    this.clientesService.getAll()
    .then(obj => {
      this.clientes = obj;
      console.log(this.clientes);
      console.log(obj);
    });
  }

}
