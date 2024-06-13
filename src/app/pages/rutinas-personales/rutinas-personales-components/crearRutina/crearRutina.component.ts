import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Rutina } from "src/app/models/rutina.model";
import { Usuario } from "src/app/models/usuario.model";
import { NotificationService } from "src/app/services/NotificationService/notification.service";
import { CardObserverService } from "src/app/services/cardObserver/cardObserver.service";
import { RutinasService } from "src/app/services/rutinas/rutinas.service";

@Component({
  selector: 'app-crear-rutina',
  templateUrl: './crearRutina.component.html'
})


export class CrearRutinaComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();
  
  usuario?: Usuario;

  constructor(
    private rutinasService: RutinasService,
    private cookieService: CookieService,
    private notificationService: NotificationService,
    private cardObserverService: CardObserverService
  ) {

    const usuarioJson = this.cookieService.get('usuario');
    if (usuarioJson) {
      this.usuario = JSON.parse(usuarioJson);
    }
  }

  rutinaComponent: Rutina = {
    nombre: "",
    descripcion: "",
    likes: 0,
    dislikes: 0,
    dni: this.usuario  // Asigna directamente el objeto usuario completo
  }

  saveRutina() {
      this.rutinaComponent.dni = this.usuario;  // Asegura que el objeto usuario se asigna a la rutina
      this.rutinasService.saveRutina(this.rutinaComponent).subscribe({
        next: (data) => {
          console.log(data);
          this.notificationService.showSuccess('Rutina creada');
          
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
    if (file) {
      // Guarda solo el nombre del archivo en rutinaComponent
      this.rutinaComponent.imagen = file.name;
    }
  }
  closeModal() {
    this.close.emit();
  }
}