// src/app/pages/pierna/pierna-components/cards/cards.component.ts

import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { Rutina } from 'src/app/models/rutina.model';
import { Usuario } from 'src/app/models/usuario.model';
import { CardObserverService } from 'src/app/services/cardObserver/cardObserver.service';
import { RutinasService } from 'src/app/services/rutinas/rutinas.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent implements OnInit, OnDestroy {
  
  data: any;
  private subscription: Subscription;

  cards: Rutina[] = [];
  @Input() card: any;
  defaultImage: string = './assets/images/products/sentadilla2.jpg'; 
 
  usuario?: Usuario;



  constructor(
    private rutinasService: RutinasService,
    private cookieService: CookieService,
    private cardObserverService: CardObserverService

  ) { 
    const usuarioJson = this.cookieService.get('usuario');
    if (usuarioJson) {
      this.usuario = JSON.parse(usuarioJson);
    }

  }
  isModalOpenArray: boolean[] = [];
  isModalSaveOpenArray: boolean[] = [];


  ngOnInit(): void {
    this.getRutinasDni();
    
    this.subscription = this.cardObserverService.data$.subscribe(data => {
      this.data = data;  // Información enviada por el componente padre al ser actuializado mediante el servicio de tipo observable
      this.getRutinasDni()
    })

  }

ngOnDestroy(): void {
    if(this.subscription){this.subscription.unsubscribe();}
}


  getRutinasDni(): void {
    if (this.usuario && this.usuario.dni) {
      this.rutinasService.getRutinasByDni(this.usuario.dni).subscribe({
        next: (data) => {
          this.cards = data;
        },
        error: (error) => {
          console.log(error);
        },
      });
    } else {
      console.log("Usuario or dni is undefined");
    }
  }

  openModal(index: number): void {
    this.isModalOpenArray[index] = true;
  }

  closeModal(index: number): void {
    this.isModalOpenArray[index] = false;
    this.getRutinasDni();

  }


  openModalSave(index: number): void {
    this.isModalSaveOpenArray[index] = true;
  }

  closeModalSave(index: number): void {
    this.isModalSaveOpenArray[index] = false;
  }
}