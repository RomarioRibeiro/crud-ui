import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Clientes } from 'src/app/core/models/clientes.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

apiURL: string;

  constructor(private http: HttpClient) {
    this.apiURL = 'https://6231127705f5f4d40d72fab8.mockapi.io/clientes';
   }
getAll(){
return this.http.get<any>(`${this.apiURL}`)
.toPromise()
//.then(res => res.data as Clientes[])
//.then(data => data);
.then(response => response);
}

}
