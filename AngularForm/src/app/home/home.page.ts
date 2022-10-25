import { Component } from '@angular/core';

import { DatosService } from '../../app/datos.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  datos: any = {};
  postData: [];
  constructor(private datosService: DatosService ) {
    this.datosService.getDesarrollador().subscribe(data => {
      this.datos = data;
    })
  }
  ngOnInit(){
    // this.http.post<any>('https://alternos.sgc-consultores.com.ve/pruebatour/registro', {title: 'Request'}).subscribe(data => {
    //   this.postData = data.id
    // })
    this.datosService.getDesarrollador().subscribe(data => {
      this.datos = data;
    })
  }
  public viewDesarrollador(){
    this.datosService.getDesarrollador().subscribe(data => {
      this.datos = data;
      console.log(this.datos);
    })
  }
}
