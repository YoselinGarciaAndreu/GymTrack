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
  defaultImage: string = './assets/images/products/sentadilla2.jpg'; 


  constructor(private ejerciciosService: EjerciciosService) { }
  isModalOpenArray: boolean[] = [];
  isModalSaveOpenArray: boolean[] = [];


  ngOnInit(): void {
    this.getEjerciciosDni();

  }
  getEjerciciosDni(): void {
    this.ejerciciosService.getEjerciciosByDni("03161512R").subscribe({
      next: (data) => {
        this.cards = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
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