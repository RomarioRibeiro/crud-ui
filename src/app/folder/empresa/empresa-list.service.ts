import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpresaListService {

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
}
