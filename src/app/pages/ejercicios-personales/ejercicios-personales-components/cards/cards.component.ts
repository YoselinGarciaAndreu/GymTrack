import { Component, OnInit } from '@angular/core';
import {card,cards} from './cards-data';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent implements OnInit {

  cards:card[];
  isModalOpen = false;
  constructor() { 

    this.cards=cards;
  }

  ngOnInit(): void {
  }

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

}
