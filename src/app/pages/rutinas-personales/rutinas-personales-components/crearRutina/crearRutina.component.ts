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

  rutinaComponent={
    rutinaID : 0,
    nombre : "",
    descripcion :  "",
    imagenRutina : "",
    likes : 0,
    dislikes : 0,
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