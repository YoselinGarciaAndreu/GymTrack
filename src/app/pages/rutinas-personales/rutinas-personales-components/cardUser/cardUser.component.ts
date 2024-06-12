// src/app/pages/pierna/pierna-components/cardUser/cardUser.component.ts

import { Component, Input, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Rutina } from 'src/app/models/rutina.model';
import { Usuario } from 'src/app/models/usuario.model';
import { RutinasService } from 'src/app/services/rutinas/rutinas.service';

@Component({
  selector: 'app-cardUser',
  templateUrl: './cardUser.component.html'
})
export class CardUserComponent implements OnInit{

  usuario?: Usuario;
  numRutinas: number;
  numLikesRutinas: number;
  rutina?: Rutina;

  constructor(
    private rutinasService: RutinasService,
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
      this.rutinasService.getTopRutinaByLikesForUsuario(this.usuario.dni).subscribe({
        next: (data) => {
          this.rutina = data;
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
      this.rutinasService.getSumLikesByUsuario(this.usuario.dni).subscribe({
        next: (data) => {
          this.numLikesRutinas = data;
        },
        error: (error) => {
          console.log(error);
        },
      });
    } else {
      console.log("Usuario or dni is undefined");
    }
  }



  
  isModalOpen = false;

 openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }



}