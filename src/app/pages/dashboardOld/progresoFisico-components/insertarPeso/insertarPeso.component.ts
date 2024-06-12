import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EMPTY } from 'rxjs';
import { Ejercicio } from 'src/app/models/ejercicio.model';
import { EjercicioEntrenamiento, EjercicioEntrenamientoId } from 'src/app/models/ejercicioEntrenamiento.model';
import { Entrenamiento } from 'src/app/models/entrenamiento.model';
import { Rutina } from 'src/app/models/rutina.model';
import { NotificationService } from 'src/app/services/NotificationService/notification.service';
import { EjercicioEntrenamientoService } from 'src/app/services/ejercicioEntrenamiento/ejercicioEntrenamiento.service';
import { EjerciciosService } from 'src/app/services/ejercicios/ejercicios.service';
import { EntrenamientoService } from 'src/app/services/entrenamiento/entrenamiento.service';

@Component({
  selector: 'app-insertar-peso',
  templateUrl: './insertarPeso.component.html'
})
export class InsertarPesoComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();
  @Input() rutina: Rutina;
  idEntrenamiento?: Entrenamiento;


  constructor(
    private ejerciciosService: EjerciciosService,
    private entrenamientoService: EntrenamientoService,
    private ejercicioEntrenamiento : EjercicioEntrenamientoService,
    private notificationService: NotificationService

  ) { }

  entrenamientoComponent={

    fecha: new Date(),

    }


  ejers: Ejercicio[] = [];
  ejerciciosEntrenamiento: EjercicioEntrenamiento[] = [];

  ngOnInit(): void {
    this.getEjerciciosByRutina();
    this.getEjerciciosEntrenamientoByRutina();

  }

  saveEntrenamiento(): void{

      //console.log(this.entrenamientoComponent)  
      
      this.entrenamientoService.saveEntrenamiento(this.entrenamientoComponent).subscribe({
  
  
        next: (data) => {
          console.log("Entrenamiento creado");
          this.idEntrenamiento = data
          // Procesado de los ejercicios con el entrenamiento recien creado
          this.saveEjercicioEntrenamiento(data)
          this.notificationService.showSuccess('Entrenamiento añadido con éxito');
          
        },
        error: (error) => {
          console.log(error);
        },
      });
      
  }

  /**
   * Obtiene las series de un ejercicio y se insertan en un entrenamiento
   * @param entrenamiento Entrenamiento en el que insertar las series
   */
  saveEjercicioEntrenamiento(entrenamiento: Entrenamiento): void{
    
    this.ejers.forEach((ejer) => { // On each exercise
      let series_ejercicio = document.getElementsByName('series-' + ejer.id_ejercicio); // Obtiene todos los elementos con el nombre series-{id_ejercicio} en una lista
      let series_valores = new Array(); //Lista para guardar los valores de las series de cada ejercicio

      series_ejercicio.forEach(serie => { // Por cada serie del ejercicio actual
        let inputElement = serie as HTMLInputElement; //Mapea la variable serie a tipo HTMLInputElement

        if (inputElement.value && String(inputElement.value).trim().length > 0) {  // Si el valor es mayor que 0 o no nulo se agrega a la lista
          series_valores.push(inputElement.value);
        }
        else { series_valores.push(0);} // Si no hay valor, se interpreta como 0

      }); // Termina bucle de series (de cada ejercicio)
      
      // Se insertan el ejercicio-entrenamiento 
      const id: EjercicioEntrenamientoId ={
        entrenamientoID: this.idEntrenamiento?.entrenamientoID,
        rutinaID: this.rutina.rutinaID,
        ejercicioID: ejer.id_ejercicio,
      }

      const ejerEntre: EjercicioEntrenamiento={
        id: id,
        entrenamiento: this.idEntrenamiento,
        rutinas: this.rutina,
        ejercicios: ejer,
        primeraSerie: series_valores[0],
        segundaSerie: series_valores[1],
        terceraSerie: series_valores[2]
      }
      
      this.ejercicioEntrenamiento.saveEjercicioEntrenamiento(ejerEntre).subscribe({
        next: (data) => {
          console.log(data)
          return data
          

        },
        error(err) {
            console.log(err);
        },
      });

    }); // Termina bucle de ejercicios
  }


  getEjerciciosByRutina(): void {

    this.ejerciciosService.getEjerciciosByRutina(this.rutina.rutinaID).subscribe({
      next: (data: Ejercicio[]) => {
        console.log(data); // Verifica la estructura de los datos aquí
        this.ejers = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }


  getEjerciciosEntrenamientoByRutina(): void{
    this.ejercicioEntrenamiento.getEjerciciosEntrenamientoByRutina(this.rutina.rutinaID).subscribe({
      next: (data: EjercicioEntrenamiento[]) => {
        console.log(data); // Verifica la estructura de los datos aquí
        this.ejerciciosEntrenamiento = data;
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