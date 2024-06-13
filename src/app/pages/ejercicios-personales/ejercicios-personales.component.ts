import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { CardsComponent } from './ejercicios-personales-components/cards/cards.component';
//declare var require: any;

@Component({
  templateUrl: './ejercicios-personales.component.html'
})
export class EjercicioGuardadoComponent implements AfterViewInit {
  
  isModalOpen = false;

  @ViewChild(CardsComponent) cardsComponent!: CardsComponent;


  constructor() {
  }

  ngAfterViewInit() { }


  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  onEjercicioCreado(): void {
    this.cardsComponent.getEjerciciosDni();
  }
}
