import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/NotificationService/notification.service';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class AppSideRegisterComponent {
  constructor(
    private router: Router,
    private usuariosService: UsuariosService,
    private notificationService: NotificationService

  ) {}

  usuarioComponent = {
    dni: "",
    nombreUsuario: "",
    nombreApellidos: "",
    correo: "",
    edad: 0,
    password: ""
  };

  saveUsuario() {
    this.usuariosService.saveUsuario(this.usuarioComponent).subscribe({
      next: (data) => {
        console.log("Usuario creado");
        this.router.navigate(['/authentication/login']);
      },
      error: (error) => {
        console.log(error);
        this.notificationService.showSuccess('Es posible que ya exista un usuario con ese Dni o nombre de usuario');

      },
    });
  }
}