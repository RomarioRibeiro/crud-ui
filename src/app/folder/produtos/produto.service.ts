import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from 'src/app/core/models/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  apiURL: string;

  constructor(private http: HttpClient) { 
    this.apiURL = 'https://6231127705f5f4d40d72fab8.mockapi.io/protudos';
  }
  getAll(){
    return this.http.get<any>(`${this.apiURL}`)
    .toPromise()
    //.then(res => res.data as Clientes[])
    //.then(data => data);
    .then(response => response);
    }

    getById(id: string) {
      return this.http.get<any>(`${this.apiURL}/${id}`)
        .toPromise();
    }
    create(produto: Produto) {
      return this.http.post<any>(`${this.apiURL}`, produto).toPromise();
    }
    update(id: string, produto: Produto) {
      return this.http.put<any>(`${this.apiURL}/${id}`, produto).toPromise();
    }
    delete(id: string) {
      return this.http.delete(`${this.apiURL}/${id}`)
        .toPromise();
    }

}
