import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
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
  
  usuario?: Usuario;

  constructor(
    private rutinasService: RutinasService,
    private cookieService: CookieService,
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