import { Usuario } from "./usuario.model";

export interface Rutina {
  rutinaID? : number;
  nombre? : String,
  descripcion? : String,
  imagenRutina? : String,
  likes? : number,
  dislikes? : number,
}