import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Usuario } from 'src/app/models/usuario.model';

import { EjerciciosService } from 'src/app/services/ejercicios/ejercicios.service';
import { EstadisticasUsuarioService } from 'src/app/services/estadisticasUsuario/estadisticasUsuario.service';

@Component({
  selector: 'app-actualizar-datos',
  templateUrl: './actualizarDatos.component.html'
})


export class ActualizarDatosComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();
  
    usuario?: Usuario;

  

  constructor(
    private estadisticasUsu: EstadisticasUsuarioService,
    private cookieService: CookieService,

  ) {

    const usuarioJson = this.cookieService.get('usuario');
    if (usuarioJson) {
      this.usuario = JSON.parse(usuarioJson);
    }
  }
  
  estadisticasComponent={

    fecha: new Date(),
    peso: 0.0,
    grasa: 0.0,
    altura: 0.0,
    masaMuscular: 0.0,
    dni: this.usuario, 
    }

  saveEstadisticas(){
    this.estadisticasComponent.dni = this.usuario;

    console.log(this.estadisticasComponent)  
    
    this.estadisticasUsu.saveEstadisticas(this.estadisticasComponent).subscribe({


      next: (data) => {
        console.log("Estadisticas creadas");
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