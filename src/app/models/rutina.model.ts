import { Usuario } from "./usuario.model";

export interface Rutina {
  rutinaID? : number;
  nombre? : String,
  descripcion? : String,
  imagen?: String;
  likes? : number,
  dislikes? : number,
  dni? : Usuario,
}