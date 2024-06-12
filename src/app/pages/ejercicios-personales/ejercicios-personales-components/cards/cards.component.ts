// src/app/pages/pierna/pierna-components/cards/cards.component.ts

import { Component, Input, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Ejercicio } from 'src/app/models/ejercicio.model';
import { Usuario } from 'src/app/models/usuario.model';
import { EjerciciosService } from 'src/app/services/ejercicios/ejercicios.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent implements OnInit {

  cards: Ejercicio[] = [];
  @Input() card: any;
  defaultImage: string = './assets/images/products/sentadilla2.jpg'; 
  
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
  isModalOpenArray: boolean[] = [];
  isModalSaveOpenArray: boolean[] = [];


  ngOnInit(): void {
    this.getEjerciciosDni();

  }
  getEjerciciosDni(): void {
    if (this.usuario && this.usuario.dni) {
      this.ejerciciosService.getEjerciciosByDni(this.usuario.dni).subscribe({
      next: (data) => {
        this.cards = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }else{
    
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