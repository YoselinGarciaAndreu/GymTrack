// src/app/pages/pierna/pierna-components/cards/cards.component.ts
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Guarda, GuardaId } from 'src/app/models/guarda.model';
import { Rutina } from 'src/app/models/rutina.model';
import { Usuario } from 'src/app/models/usuario.model';
import { NotificationService } from 'src/app/services/NotificationService/notification.service';
import { GuardaService } from 'src/app/services/guarda/guarda.service';
import { RutinasService } from 'src/app/services/rutinas/rutinas.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent implements OnInit {

  cards: Rutina[] = [];
  isModalOpen = false;
  defaultImage: string = './assets/images/products/sentadilla2.jpg'; // Imagen por defecto
  searchText : string = '';

  isModalOpenArray: boolean[] = [];

  usuario?: Usuario;

  constructor(
    private rutinaService: RutinasService,
    private guardaService: GuardaService,
    private notificationService: NotificationService,
    private cookieService: CookieService,

  ) { 
    const usuarioJson = this.cookieService.get('usuario');
  if (usuarioJson) {
    this.usuario = JSON.parse(usuarioJson);
  }
  }

  onSubmit(): void{

    this.getRutinasNombreBusqueda(this.searchText);
  }
  ngOnInit(): void {
    this.getRutinas();
  }

  getRutinas(): void {
    this.rutinaService.getRutinas().subscribe({
      next: (data: Rutina[]) => {
        this.cards = data;
      },
      error: (error) => {
        console.error('Error fetching rutinas:', error);
      }
    });
  }


  // usuario?={
  //   dni : "03161512R",
  //   nombreUsuario: "Yoselin" ,
  //   nombreApellidos: "Jose Luis Garcia Andreu", 
  //   correo :"jocefuo@gmail.com",
  //   edad :19,
  // }
  
  guardarRutina(rutina: Rutina): void {
    const id: GuardaId = {
      rutinaID: rutina.rutinaID,
      usuarioID: this.usuario?.dni
    };
    const guarda: Guarda = {
      id: id,
      usuarios: this.usuario,
      rutinas: rutina
    };
    
    this.guardaService.saveRutinaUsuario(guarda).subscribe({
      next: (data: Guarda) => {
        this.notificationService.showSuccess('Rutina guardada con éxito');
      },
      error: (error) => {
        console.log('Error al guardar RutinaEjercicios:', error);
      }
    });
  }

  getRutinasNombreBusqueda(nombre : string): void {
    this.rutinaService.getRutinasByNombre(nombre).subscribe({
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

