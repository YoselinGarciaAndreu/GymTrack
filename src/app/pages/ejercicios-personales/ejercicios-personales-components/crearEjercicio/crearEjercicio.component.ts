import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Usuario } from 'src/app/models/usuario.model';

import { EjerciciosService } from 'src/app/services/ejercicios/ejercicios.service';

@Component({
  selector: 'app-crear-ejercicio',
  templateUrl: './crearEjercicio.component.html'
})


export class CrearEjercicioComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();
  
    usuario?: Usuario;

  

  constructor(
    private ejerciciosService: EjerciciosService,
    private cookieService: CookieService,

  ) {

    const usuarioJson = this.cookieService.get('usuario');
    if (usuarioJson) {
      this.usuario = JSON.parse(usuarioJson);
    }
  }
  
  ejercicioComponent={

    descripcion: "",
    nombre: "",
    tipo: "",
    likes: 0,
    disLikes: 0,
    dni: this.usuario, 
    }

  saveEjercicio(){
    this.ejercicioComponent.dni = this.usuario;
    console.log(this.ejercicioComponent)  
    
    this.ejerciciosService.saveEjercicio(this.ejercicioComponent).subscribe({


      next: (data) => {
        console.log("Ejercicio creado");
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