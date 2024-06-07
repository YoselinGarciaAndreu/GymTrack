import { Component, AfterViewInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
//declare var require: any;

@Component({
  templateUrl: './rutinas-personales.component.html'
})

export class RutinaGuardadaComponent implements AfterViewInit {

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
