import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  public nombre = `Jose Perez`
  constructor(private http: HttpClient ) {}
  getDesarrollador(nombre){
    return this.http.get<any>('https://alternos.sgc-consultores.com.ve/pruebatour/consulta?nombre='+ nombre)
  }
}
