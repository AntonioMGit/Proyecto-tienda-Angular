import { Component, OnInit } from '@angular/core';
import { Alumno } from '../alumno';

@Component({
  selector: 'app-ficha-alumno',
  templateUrl: './ficha-alumno.component.html',
  styleUrls: ['./ficha-alumno.component.scss']
})
export class FichaAlumnoComponent implements OnInit {

  mensaje:string = "primer componente de angular"

  alumno:Alumno = new Alumno("001A", "luis", "garcia", "correo");

  listaAlumnos:Alumno[] = []

  nif:string = "Cambiar"
  nombre:string = "Cambiar"
  apellidos:string = "Cambiar"

  anchoTabla:number=50;
  alumnoSeleccionado:number=-1

  constructor() { }

  ngOnInit(): void {
  }

  crearAlumno(){
    console.log("creando alumno...");
    
    this.listaAlumnos.push(
      new Alumno(this.nif, this.nombre, this.apellidos, "correo")
    )

    console.log(this.listaAlumnos)
  }
  borrarAlumnos(){
    this.listaAlumnos = []
  }
  borrarAlumno(nif:string){
    this.listaAlumnos = this.listaAlumnos.filter((a) => a.nif!=nif)
  }

  filaPulsada(alumnoSeleccionado:number){
    this.alumnoSeleccionado=alumnoSeleccionado
  }

}
