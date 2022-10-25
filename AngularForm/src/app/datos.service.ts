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
  public options = { headers: this.headers };
  public body: {
    nombre: '',
    nombrearchivo: "prueba.txt",
    ruta: "./archivo/"
  };
  constructor(private http: HttpClient ) {}
  getDesarrollador(nombre){
    return this.http.get<any>('https://alternos.sgc-consultores.com.ve/pruebatour/consulta?nombre='+ nombre)
  }
  postDesarrollador(body){
    return this.http.post<any>('https://reqres.in/api/posts', this.body, this.options)
  }
}
