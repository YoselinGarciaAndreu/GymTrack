import { Usuario } from "./usuario.model";

export interface EstadisticasUsuario {
  estadisticasID? : number;
  fecha? : Date,
  masaMuscular? : number,
  altura? : number,
  grasa? : number,
  peso?: number,
  dni? : Usuario,
}