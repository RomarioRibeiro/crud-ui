import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empresa } from 'src/app/core/models/empresas';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  apiURL: string;

  constructor(private http: HttpClient) {
    this.apiURL =  `${environment.apiUrl}/empresas`;


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
create(empresa: Empresa) {
  return this.http.post<any>(`${this.apiURL}`, empresa).toPromise();
}
update(id: string, empresa: Empresa) {
  return this.http.put<any>(`${this.apiURL}/${id}`, empresa).toPromise();
}
delete(id: string) {
  return this.http.delete(`${this.apiURL}/${id}`)
    .toPromise();
}
}
