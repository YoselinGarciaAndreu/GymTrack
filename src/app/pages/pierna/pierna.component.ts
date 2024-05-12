import { Component, AfterViewInit } from '@angular/core';
//declare var require: any;

@Component({
  templateUrl: './pierna.component.html'
})
export class PiernaComponent implements AfterViewInit {
  subtitle: string;
  constructor() {
    this.subtitle = 'This is some text within a card block.';
  }

  ngAfterViewInit() { }
}
