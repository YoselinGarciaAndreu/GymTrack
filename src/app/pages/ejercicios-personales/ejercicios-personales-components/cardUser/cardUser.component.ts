// src/app/pages/pierna/pierna-components/cardUser/cardUser.component.ts

import { Component, Input, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Ejercicio } from 'src/app/models/ejercicio.model';
import { Usuario } from 'src/app/models/usuario.model';
import { EjerciciosService } from 'src/app/services/ejercicios/ejercicios.service';

@Component({
  selector: 'app-cardUser',
  templateUrl: './cardUser.component.html'
})
export class CardUserComponent{
  
  isModalOpen = false;
  usuario?: Usuario;
  numLikesEjercicios: number;
  ejercicio?: Ejercicio;

constructor(
  private ejercicioService: EjerciciosService,
  private cookieService: CookieService,
) { 
  const usuarioJson = this.cookieService.get('usuario');
  if (usuarioJson) {
    this.usuario = JSON.parse(usuarioJson);
  }
}

ngOnInit(): void {
  this.getRutinaMaxLikes();
  this.getSumLikesByUsuario();

}
getRutinaMaxLikes(): void {
  if (this.usuario && this.usuario.dni) {
    this.ejercicioService.getTopEjercicioByLikesForUsuario(this.usuario.dni).subscribe({
      next: (data) => {
        this.ejercicio = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  } else {
  }
}



getSumLikesByUsuario(): void {
  if (this.usuario && this.usuario.dni) {
    this.ejercicioService.getSumLikesByUsuario(this.usuario.dni).subscribe({
      next: (data) => {
        this.numLikesEjercicios = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  } else {
    console.log("Usuario or dni is undefined");
  }
}

 openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
}