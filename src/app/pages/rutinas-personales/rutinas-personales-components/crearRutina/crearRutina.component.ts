// import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { RutinasService } from 'src/app/services/rutinas/rutinas.service';

import { Component, EventEmitter, Input, Output } from "@angular/core";
import { RutinasService } from "src/app/services/rutinas/rutinas.service";

@Component({
  selector: 'app-crear-rutina',
  templateUrl: './crearRutina.component.html'
})


export class CrearRutinaComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();


  usuario={
    dni : "03161512R",
    nombreUsuario: "Yoselin" ,
    nombreApellidos: "Jose Luis Garcia Andreu", 
    correo :"jocefuo@gmail.com",
    edad :19,
  }

  rutinaComponent={
    rutinaID : 0,
    nombre : "",
    descripcion :  "",
    imagenRutina : "",
    likes : 0,
    dislikes : 0,
    dni : this.usuario
  }
  constructor(private rutinasService: RutinasService) {}

  saveRutina(){

    console.log(this.rutinaComponent)

    this.rutinasService.saveRutina(this.rutinaComponent).subscribe({
      next: (data) => {
        console.log("Rutina creado");
      },
      error: (error) => {
        console.log(error);
      },
    });

  }
  
  closeModal() {
    this.close.emit();
  }
}