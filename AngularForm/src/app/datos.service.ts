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
      nombrearchivo: "https://static9.depositphotos.com/1625039/1128/i/450/depositphotos_11287172-stock-photo-big-eyes.jpg",
      ruta: "./archivo/"
    };
    let options = { headers: this.headers };
    return this.http.post<any>('https://alternos.sgc-consultores.com.ve/pruebatour/registro', body, options);
  }
}
