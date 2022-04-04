import { EmpresaListService } from './../empresa-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresa-list',
  templateUrl: './empresa-list.component.html',
  styleUrls: ['./empresa-list.component.scss'],
})
export class EmpresaListComponent implements OnInit {

  clientes: any [] = [];
  empresaListServiceService: any;

  constructor(private empresaListService: EmpresaListService) { }

  ngOnInit(): void{
    this.carregarLista();
  }


  carregarLista(){
    this.empresaListServiceService.getAll()
    .then(obj => {
      this.clientes = obj;
      console.log(this.clientes);
      console.log(obj);
    });
  }
}
