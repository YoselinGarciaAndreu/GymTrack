import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Guarda } from 'src/app/models/guarda.model';
import { EjercicioEntrenamiento } from 'src/app/models/ejercicioEntrenamiento.model';

@Injectable({
  providedIn: 'root'
})
export class EjercicioEntrenamientoService {

  private apiUrl = 'http://localhost:8080/ejercicioEntrenamiento';  

  constructor(private http: HttpClient) { }

  saveEjercicioEntrenamiento(ejerEntrenamiento: EjercicioEntrenamiento): Observable<Guarda> {
    return this.http.post<Guarda>(`${this.apiUrl}/saveEjercicioEntrenamiento`, ejerEntrenamiento);
  }

 
  getEjerciciosEntrenamientoByRutina(rutinaID?: number): Observable<EjercicioEntrenamiento[]> {
    return this.http.get<EjercicioEntrenamiento[]>(`${this.apiUrl}/rutina?rutinaId=${rutinaID}`);
  }
}





