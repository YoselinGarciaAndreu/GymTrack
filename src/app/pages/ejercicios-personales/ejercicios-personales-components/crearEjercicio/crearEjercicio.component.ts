import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Usuario } from 'src/app/models/usuario.model';
import { NotificationService } from 'src/app/services/NotificationService/notification.service';
import { CardObserverService } from 'src/app/services/cardObserver/cardObserver.service';

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
    private notificationService: NotificationService,
    private cardObserverService: CardObserverService

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
    imagen: "",
    likes: 0,
    disLikes: 0,
    dni: this.usuario, 
    }

  saveEjercicio(){
    this.ejercicioComponent.dni = this.usuario;
    console.log(this.ejercicioComponent)  
    
    this.ejerciciosService.saveEjercicio(this.ejercicioComponent).subscribe({

      next: (data) => {
        this.notificationService.showSuccess('Ejercicio creado');          
        
        // notify cards service
        this.cardObserverService.setData(null)
            },
      error: (error) => {
        console.log(error);
      },
    });

  
}


onFileSelected(event: any) {
  const file: File = event.target.files[0];
  // Verifica si se seleccionó un archivo
  if (file) {
    // Guarda solo el nombre del archivo en ejercicioComponent
    this.ejercicioComponent.imagen = file.name;
  }
}
  
  closeModal() {
    this.close.emit();
  }
}