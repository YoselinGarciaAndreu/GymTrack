// src/app/pages/pierna/pierna-components/cardsGuardadas/cardsGuardadas.component.ts

import { Component, Input, OnInit } from '@angular/core';
import { Rutina } from 'src/app/models/rutina.model';
import { RutinasService } from 'src/app/services/rutinas/rutinas.service';

@Component({
  selector: 'app-cardsGuardadas',
  templateUrl: './cardsGuardadas.component.html'
})
export class CardsGuardadasComponent implements OnInit {

  cards: Rutina[] = [];
  @Input() card: any;
  defaultImage: string = './assets/images/products/sentadilla2.jpg'; 


  constructor(private rutinasService: RutinasService) { }
  isModalOpenArray: boolean[] = [];
  isModalSaveOpenArray: boolean[] = [];


  ngOnInit(): void {
    this.getRutinasDni();

  }
  getRutinasDni(): void {
    this.rutinasService.getRutinasByGuardado("03161512R").subscribe({
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