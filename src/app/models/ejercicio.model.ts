import { Usuario } from "./usuario.model";

export interface Ejercicio {
  id_ejercicio?: number;
  descripcion?: string;
  nombre?: string;
  tipo?: string;
  imagen?: string;
  likes?: number;
  disLikes?: number;
  dni?: Usuario; 
}


