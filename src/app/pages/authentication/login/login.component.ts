import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Usuario } from 'src/app/models/usuario.model';
import { NotificationService } from 'src/app/services/NotificationService/notification.service';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class AppSideLoginComponent {
  constructor(
    private usuariosService: UsuariosService,
    private router: Router,
    private notificationService: NotificationService,
    private cookieService: CookieService // Importa CookieService
  ) {}

  nombreUsu: string;
  password: string;

  getUsuario(): void {
    this.usuariosService.getUsuarioLogin(this.nombreUsu, this.password).subscribe({
      next: (data: Usuario[]) => {
        console.log(data); // Verifica la estructura de los datos aquí
        if (data.length > 0) {
          // Si hay datos en la respuesta, redirigir a la siguiente página
          this.router.navigate(['/dashboard']);
          // Convierte el objeto de usuario en una cadena JSON y guárdalo en una cookie
          const usuarioJson = JSON.stringify(data[0]);
          this.cookieService.set('usuario', usuarioJson);
        } else {
          // Si no hay datos, muestra un mensaje de error o realiza otra acción
          console.log('Credenciales incorrectas');
          this.notificationService.showSuccess('Usuario o contraseña incorrecto');
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}