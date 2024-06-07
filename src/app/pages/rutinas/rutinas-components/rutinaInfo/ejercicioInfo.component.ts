import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Ejercicio } from 'src/app/models/ejercicio.model';
import { Rutina } from 'src/app/models/rutina.model';
import { EjerciciosService } from 'src/app/services/ejercicios/ejercicios.service';

@Component({
  selector: 'app-ejercicio-info',
  templateUrl: './ejercicioInfo.component.html'
})
export class EjercicioInfoComponent {
  @Input() isOpen = false;
  @Input() nombre: any;
  @Input() descripcion: any;
  @Input() nombreUsuario: any;
  @Input() rutina: Rutina;
  
  @Output() close = new EventEmitter<void>();

  constructor(private ejerciciosService: EjerciciosService) { }

  cards: Ejercicio[] = [];

  ngOnInit(): void {
    this.getEjerciciosByRutina();

  }
  getEjerciciosByRutina(): void {

    this.ejerciciosService.getEjerciciosByRutina(this.rutina.rutinaID).subscribe({
      next: (data: Ejercicio[]) => {
        console.log(data); // Verifica la estructura de los datos aquí
        this.cards = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  closeModal() {
    this.close.emit();
  }
}
