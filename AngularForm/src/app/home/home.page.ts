import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { DatosService } from '../../app/datos.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public nombre: string = 'Jose Perez'
  datos: any = {};
  postData: [];
  constructor(private datosService: DatosService, private cd: ChangeDetectorRef ) { }
  ngOnInit(){
    // this.http.post<any>('https://alternos.sgc-consultores.com.ve/pruebatour/registro', {title: 'Request'}).subscribe(data => {
      //   this.postData = data.id
      // })
    this.viewDesarrollador();
  }

  public viewDesarrollador(){
    this.datosService.getDesarrollador(this.nombre).subscribe(data => {
      this.cd.detectChanges();
      this.datos = data;
      console.log(this.datos);
      console.log(this.nombre)
    })
  }
}
