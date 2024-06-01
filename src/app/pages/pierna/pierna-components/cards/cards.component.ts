// src/app/pages/pierna/pierna-components/cards/cards.component.ts

import { Component, Input, OnInit } from '@angular/core';
import { Ejercicio } from 'src/app/models/ejercicio.model';
import { EjerciciosService } from 'src/app/services/ejercicios/ejercicios.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent implements OnInit {

  cards: Ejercicio[] = [];
  @Input() card: any;
  isModalOpen = false;
  defaultImage: string = './assets/images/products/sentadilla2.jpg'; // Imagen por defecto

  constructor(private ejerciciosService: EjerciciosService) { }

  ngOnInit(): void {
    this.getEjerciciosDePierna();
  }

  getEjerciciosDePierna(): void {
    // this.ejerciciosService.getEjerciciosByTipo('Pierna').subscribe((data: Ejercicio[]) => {
    //   this.cards = data;
    //   console.log(this.cards); // Para depuración
    // }, error => {
    //   console.error('Error fetching exercises', error); // Para depuración
    // });
    this.ejerciciosService.getEjerciciosByTipo("Pierna").subscribe({
      next: (data) => {
        this.cards = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
}
