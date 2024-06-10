import { Component, OnInit } from '@angular/core';
import {card,cards} from './cards-data';
import { RutinasService } from 'src/app/services/rutinas/rutinas.service';
import { Rutina } from 'src/app/models/rutina.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent implements OnInit {

  cards:Rutina[];
  isModalOpenArray: boolean[] = [];


  constructor(private rutinasService: RutinasService) { }

  ngOnInit(): void {
    this.getRutinasDni();
  }


  getRutinasDni(): void {
    this.rutinasService.getRutinasByDni("03161512R").subscribe({
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

}
