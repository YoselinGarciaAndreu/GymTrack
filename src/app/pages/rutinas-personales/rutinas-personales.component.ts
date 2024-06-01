import { Component, AfterViewInit } from '@angular/core';
//declare var require: any;

@Component({
  templateUrl: './rutinas-personales.component.html'
})

export class RutinaGuardadaComponent implements AfterViewInit {
  subtitle: string;

  isModalOpen = false;


  constructor() {
    this.subtitle = 'This is some text within a card block.';
  }

  ngAfterViewInit() { }


  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
}
