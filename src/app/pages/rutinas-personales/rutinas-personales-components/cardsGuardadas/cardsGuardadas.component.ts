// src/app/pages/pierna/pierna-components/cardsGuardadas/cardsGuardadas.component.ts

import { Component, Input, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Rutina } from 'src/app/models/rutina.model';
import { Usuario } from 'src/app/models/usuario.model';
import { RutinasService } from 'src/app/services/rutinas/rutinas.service';

@Component({
  selector: 'app-cardsGuardadas',
  templateUrl: './cardsGuardadas.component.html'
})
export class CardsGuardadasComponent implements OnInit {

  cards: Rutina[] = [];
  @Input() card: any;
  defaultImage: string = './assets/images/products/sentadilla2.jpg'; 

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


  isModalOpenArray: boolean[] = [];
  isModalSaveOpenArray: boolean[] = [];


  ngOnInit(): void {
    this.getRutinasDni();

  }
  getRutinasDni(): void {
    if (this.usuario && this.usuario.dni) {

    this.rutinasService.getRutinasByGuardado(this.usuario.dni).subscribe({
      next: (data) => {
        this.cards = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  } else {
    console.log("Usuario or dni is undefined");
  }
  }

  openModal(index: number): void {
    this.isModalOpenArray[index] = true;
  }

  closeModal(index: number): void {
    this.isModalOpenArray[index] = false;
  }


  openModalSave(index: number): void {
    this.isModalSaveOpenArray[index] = true;
  }

  closeModalSave(index: number): void {
    this.isModalSaveOpenArray[index] = false;
  }
}