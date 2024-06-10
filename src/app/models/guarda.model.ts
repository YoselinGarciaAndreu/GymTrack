import { Rutina } from "./rutina.model";
import { Usuario } from "./usuario.model";

export interface GuardaId {
  usuarioID?: String;
  rutinaID?: number;
}

export interface Guarda {
  id?: GuardaId;
  usuarios?: Usuario;
  rutinas?: Rutina;
}
