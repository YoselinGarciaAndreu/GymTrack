import { Component, OnInit } from '@angular/core';
import { RutinasService } from 'src/app/services/rutinas/rutinas.service';
import { Rutina } from 'src/app/models/rutina.model';
import { CookieService } from 'ngx-cookie-service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent implements OnInit {

  cards:Rutina[];
  isModalOpenArray: boolean[] = [];

  usuario?: Usuario;

  constructor(
    private rutinasService: RutinasService,
    private cookieService: CookieService,

  ) {
    const usuarioJson = this.cookieService.get('usuario');
    if (usuarioJson) {
      this.usuario = JSON.parse(usuarioJson);
    }
   }

  ngOnInit(): void {
    this.getRutinasDni();
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
  }else{

  }
  }

  openModal(index: number): void {
    this.isModalOpenArray[index] = true;
  }

  closeModal(index: number): void {
    this.isModalOpenArray[index] = false;
  }

}
