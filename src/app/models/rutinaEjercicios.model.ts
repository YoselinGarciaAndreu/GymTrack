import { Ejercicio } from "./ejercicio.model";
import { Rutina } from "./rutina.model";

export interface RutinaEjercicioId {
  rutinaID?: number;
  ejercicioID?: number;
}

export interface RutinaEjercicios {
  id?: RutinaEjercicioId;
  rutina?: Rutina;
  ejercicio?: Ejercicio;
}
