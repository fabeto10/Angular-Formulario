import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { DatosService } from '../../app/datos.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public response = {};
  public nombre: string = 'Francisco Vidal'
  registerPost: any = {};
  datos: any = {};
  perrito: any = {};
  condicional: any = true;
  constructor(private postService: DatosService, private datosService: DatosService, private cd: ChangeDetectorRef ) { }
  ngOnInit(): void {
    // this.viewDesarrollador();
    // this.registrarDesarrollador();
  }

  public registrarDesarrollador(): void {
    this.postService.postDesarrollador(this.nombre).subscribe(data => {
      this.registerPost = data;
      // this.viewDesarrollador();
      this.condicional = true;
      console.log(this.registerPost);
    })
  }
  public viewDesarrollador(){
    this.datosService.getDesarrollador(this.nombre).subscribe(data => {
      this.cd.detectChanges();
      this.datos = data;
      this.condicional = false;
      console.log(this.datos);
      console.log(this.nombre);
    })
  }
}
