import { Component, AfterViewInit } from '@angular/core';
//declare var require: any;

@Component({
  templateUrl: './progresoFisico.component.html'
})
export class ProgresoFisicoComponent implements AfterViewInit {
  subtitle: string;
  constructor() {
    this.subtitle = 'This is some text within a card block.';
  }

  ngAfterViewInit() { }
}
