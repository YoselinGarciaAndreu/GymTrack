import { Ejercicio } from "./ejercicio.model";
import { Entrenamiento } from "./entrenamiento.model";
import { Rutina } from "./rutina.model";

export interface EjercicioEntrenamientoId {
  entrenamientoID?: number;
  rutinaID?: number;
  ejercicioID?: number;
}

export interface EjercicioEntrenamiento {
  id?: EjercicioEntrenamientoId;
  entrenamiento?: Entrenamiento;
  rutinas?: Rutina;
  ejercicios?: Ejercicio;
  primeraSerie? : number;
  segundaSerie? : number;
  terceraSerie? : number;
}
