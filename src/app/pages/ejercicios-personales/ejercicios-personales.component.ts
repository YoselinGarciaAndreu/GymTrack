import { Component, AfterViewInit } from '@angular/core';
//declare var require: any;

@Component({
  templateUrl: './ejercicios-personales.component.html'
})
export class EjercicioGuardadoComponent implements AfterViewInit {
  
  isModalOpen = false;
  constructor() {
  }

  ngAfterViewInit() { }


  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
}
