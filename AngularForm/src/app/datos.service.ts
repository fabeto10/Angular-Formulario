import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  public nombre = `Jose Perez`;
  public headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  constructor(private http: HttpClient ) {}
  getDesarrollador(nombre){
    return this.http.get<any>('https://alternos.sgc-consultores.com.ve/pruebatour/consulta?nombre='+ nombre)
  }
  postDesarrollador(nombre){
    let body = {
      nombre: nombre,
      nombrearchivo: "prueba.txt",
      ruta: "./archivo/"
    };
    let options = { headers: this.headers };
    return this.http.post<any>('https://reqres.in/api/posts', body, options);
  }
}
