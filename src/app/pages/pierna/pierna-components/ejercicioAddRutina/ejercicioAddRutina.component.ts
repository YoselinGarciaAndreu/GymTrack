import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Ejercicio } from 'src/app/models/ejercicio.model';
import { Rutina } from 'src/app/models/rutina.model';
import { RutinaEjercicioId, RutinaEjercicios } from 'src/app/models/rutinaEjercicios.model';
import { Usuario } from 'src/app/models/usuario.model';
import { RutinasService } from 'src/app/services/rutinas/rutinas.service';
import { RutinasEjerciciosService } from 'src/app/services/rutinasEjercicios/rutinasEjercicios.service';

@Component({
  selector: 'app-ejercicio-add-rutina',
  templateUrl: './ejercicioAddRutina.component.html'
})
export class EjercicioAddRutinaComponent {
  @Input() isOpen = false;
  @Input() nombre: any;
  @Input() descripcion: any;
  @Input() nombreUsuario: any;
  @Input() ejercicio?: Ejercicio;

  @Output() close = new EventEmitter<void>();


  rutinaEjerciciosComponent={

    Ejercicio : this.ejercicio,
  }

  closeModal() {
    this.close.emit();
  }

  cardsRutinas: Rutina[] = [];
  constructor(

    private rutinasService: RutinasService,
    private rutinaEjerciciosService: RutinasEjerciciosService

  ) { }
  

  ngOnInit(): void {
      this.getEjerciciosDePierna();
  
    }
    getEjerciciosDePierna(): void {
      this.rutinasService.getRutinasByDni('03161512R').subscribe({
        next: (data: Rutina[]) => {
          console.log(data); // Verifica la estructura de los datos aquí
          this.cardsRutinas = data;
        },
        error: (error) => {
          console.log(error);
        },
      });
    }

    // saveRutinaEjercicios(rutinaEjercicios: RutinaEjercicios): void {
    //   // Llama al método saveRutinaEjercicios del servicio RutinaEjerciciosService
    //   this.rutinaEjerciciosService.saveRutinaEjercicio(rutinaEjercicios).subscribe({
    //     next: (data: RutinaEjercicios) => {
    //       console.log('RutinaEjercicios guardado exitosamente:', data);
    //       // Realiza cualquier acción adicional después de guardar la rutinaEjercicios, si es necesario
    //     },
    //     error: (error) => {
    //       console.log('Error al guardar RutinaEjercicios:', error);
    //       // Maneja el error de acuerdo a tus requerimientos
    //     }
    //   });
    // }

    saveRutinaEjercicios(rutina: Rutina): void {

      const id: RutinaEjercicioId = {
        rutinaID: rutina.rutinaID,
        ejercicioID: this.ejercicio?.id_ejercicio
      };

      const rutinaEjercicios: RutinaEjercicios = {
        id: id,
        rutina: rutina,
        ejercicio: this.ejercicio
      };

      // Llama al método saveRutinaEjercicios del servicio RutinaEjerciciosService
      this.rutinaEjerciciosService.saveRutinaEjercicio(rutinaEjercicios).subscribe({
        next: (data: RutinaEjercicios) => {
          // console.log('RutinaEjercicios guardado exitosamente:', data);
          // Realiza cualquier acción adicional después de guardar la rutinaEjercicios, si es necesario
        },
        error: (error) => {
          console.log('Error al guardar RutinaEjercicios:', error);
          // Maneja el error de acuerdo a tus requerimientos
        }
      });
    }
  
}
