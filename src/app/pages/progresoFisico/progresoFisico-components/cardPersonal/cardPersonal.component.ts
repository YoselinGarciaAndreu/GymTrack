import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RutinasService } from 'src/app/services/rutinas/rutinas.service';
import { Rutina } from 'src/app/models/rutina.model';
import { CookieService } from 'ngx-cookie-service';
import { Usuario } from 'src/app/models/usuario.model';
import { EstadisticasUsuarioService } from 'src/app/services/estadisticasUsuario/estadisticasUsuario.service';
import { EstadisticasUsuario } from 'src/app/models/estadisticasUsuario.model';
import { CardObserverService } from 'src/app/services/cardObserver/cardObserver.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cardPersonal',
  templateUrl: './cardPersonal.component.html'
})
export class CardPersonalComponent implements OnInit {

  isModalOpen = false;
  imc: number;

  usuario?: Usuario;

  private subscription: Subscription;
  estadisticas?: EstadisticasUsuario;

  constructor(
    private estadisticasUsu: EstadisticasUsuarioService,
    private cookieService: CookieService,
    private cardObservableService: CardObserverService
  ) { 
    const usuarioJson = this.cookieService.get('usuario');
    if (usuarioJson) {
      this.usuario = JSON.parse(usuarioJson);
    }
  }

  ngOnInit(): void {
    this.getEstadisticas();
    this.subscription = this.cardObservableService.data$.subscribe(estadisticas=>{
      this.estadisticas = estadisticas // Información enviada por el componente padre al ser actuializado mediante el servicio de tipo observable
      this.getEstadisticas()
    })
  }

  getEstadisticas(): void {
    if (this.usuario && this.usuario.dni) {
      this.estadisticasUsu.getEstadisticasActual(this.usuario.dni).subscribe({
        next: (data) => {
          this.estadisticas = data;
          this.getIMC();
        },
        error: (error) => {
          console.log(error);
        },
      });
    } else {
    }
  }

  getIMC(): void{
    if (this.estadisticas && this.estadisticas.peso && this.estadisticas.altura) {
      const imcValue = (this.estadisticas?.peso / (this.estadisticas?.altura * this.estadisticas?.altura) )    
      this.imc = parseFloat(imcValue.toFixed(2));
    }else{
      
    }

  }
  
  openModal(): void {
     this.isModalOpen = true;
   }
 
   closeModal(): void {
     this.isModalOpen = false;
   }


}

