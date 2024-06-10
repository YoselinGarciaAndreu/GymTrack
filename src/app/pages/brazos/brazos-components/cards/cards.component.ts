// src/app/pages/brazos/brazos-components/cards/cards.component.ts

import { Component, Input, OnInit } from '@angular/core';
import { Ejercicio } from 'src/app/models/ejercicio.model';
import { EjerciciosService } from 'src/app/services/ejercicios/ejercicios.service';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent implements OnInit {

  cards: Ejercicio[] = [];
  // @Input() card: any;
  
  defaultImage: string = './assets/images/products/sentadilla2.jpg'; 

  searchText : string = '';

  constructor(private ejerciciosService: EjerciciosService) { }
  isModalOpenArray: boolean[] = [];
  isModalSaveOpenArray: boolean[] = [];

  onSubmit(): void{

    this.getEjerciciosDeTipoBusqueda(this.searchText);
  }

  
  ngOnInit(): void {
    this.getEjerciciosDeBrazos();

  }
  getEjerciciosDeBrazos(): void {
    this.ejerciciosService.getEjerciciosByTipo('Brazos').subscribe({
      next: (data: Ejercicio[]) => {
        console.log(data); // Verifica la estructura de los datos aquí
        this.cards = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }


  getEjerciciosDeBrazosBusqueda(nombre : string): void {
    this.ejerciciosService.getEjerciciosByNombreBusqueda(nombre).subscribe({
      next: (data) => {
        this.cards = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  

  getEjerciciosDeTipoBusqueda(nombre : string): void {
    this.ejerciciosService.getEjerciciosByNombreBusquedaByTipo(nombre, "Brazos").subscribe({
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



