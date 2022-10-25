import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http: HttpClient) {}
  getDesarrollador(){
    return this.http.get<any>('https://alternos.sgc-consultores.com.ve/pruebatour/consulta?nombre=Jose Perez')
  }
}
