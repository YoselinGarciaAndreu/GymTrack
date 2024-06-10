// import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { RutinasService } from 'src/app/services/rutinas/rutinas.service';

import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Rutina } from "src/app/models/rutina.model";
import { Usuario } from "src/app/models/usuario.model";
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
    nombreUsuario: "Yoselin",
    nombreApellidos: "Jose Luis Garcia Andreu", 
    correo :"jocefuo@gmail.com",
    edad :19,
  }


  rutinaComponent={
    nombre : "",
    descripcion :  "",
    likes : 0,
    dislikes : 0,
    dni : this.usuario
  }

 
  constructor(private rutinasService: RutinasService) {}

  saveRutina(){

    this.rutinasService.saveRutina(this.rutinaComponent).subscribe({
      next: (data) => {
        console.log(data)
        console.log("Rutina creada");
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