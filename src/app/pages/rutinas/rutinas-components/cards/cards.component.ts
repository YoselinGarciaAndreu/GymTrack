// src/app/pages/pierna/pierna-components/cards/cards.component.ts
import { Component, OnInit } from '@angular/core';
import { Rutina } from 'src/app/models/rutina.model';
import { RutinasService } from 'src/app/services/rutinas/rutinas.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent implements OnInit {

  cards: Rutina[] = [];
  isModalOpen = false;
  defaultImage: string = './assets/images/products/sentadilla2.jpg'; // Imagen por defecto

  isModalOpenArray: boolean[] = [];

  constructor(private rutinaService: RutinasService) { }

  ngOnInit(): void {
    this.getRutinas();
  }

  getRutinas(): void {
    this.rutinaService.getRutinas().subscribe({
      next: (data: Rutina[]) => {
        this.cards = data;
      },
      error: (error) => {
        console.error('Error fetching rutinas:', error);
      }
    });
  }

  openModal(index: number): void {
    this.isModalOpenArray[index] = true;
  }

  closeModal(index: number): void {
    this.isModalOpenArray[index] = false;
  }
}

