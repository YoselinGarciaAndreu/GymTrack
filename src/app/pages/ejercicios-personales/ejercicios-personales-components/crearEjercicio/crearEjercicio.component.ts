import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Ejercicio } from 'src/app/models/ejercicio.model';
import { EjerciciosService } from 'src/app/services/ejercicios/ejercicios.service';

@Component({
  selector: 'app-crear-ejercicio',
  templateUrl: './crearEjercicio.component.html'
})


export class CrearEjercicioComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  id_ejercicio!: number;
  descripcion!: string;
  nombre!: string;
  tipo!: string;
  likes!: number;
  disLikes!: number;
  dni!: any; 

  constructor(private ejerciciosService: EjerciciosService) {}

  saveEjercicio(){

    var ejercicio: Ejercicio = {
      id_ejercicio: 4,
      descripcion: this.descripcion,
      nombre: this.nombre,
      tipo: this.tipo,
      likes: 0,
      disLikes: 0,
      dni: '03161512R' 
    }

    this.ejerciciosService.saveEjercicio(ejercicio).subscribe(
      
    )

  }
  
  closeModal() {
    this.close.emit();
  }
}