import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from 'src/app/core/models/categorias.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  apiURL: string;
  constructor(private http: HttpClient ) { }

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
    create(categorias: Categoria) {
      return this.http.post<any>(`${this.apiURL}`, categorias).toPromise();
    }
    update(id: string, categorias: Categoria) {
      return this.http.put<any>(`${this.apiURL}/${id}`, categorias).toPromise();
    }
    delete(id: string) {
      return this.http.delete(`${this.apiURL}/${id}`)
        .toPromise();
    }


}

