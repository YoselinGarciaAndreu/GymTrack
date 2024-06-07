import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RutinaEjercicios } from 'src/app/models/rutinaEjercicios.model';

@Injectable({
  providedIn: 'root'
})
export class RutinasEjerciciosService {

  private apiUrl = 'http://localhost:8080/rutinaEjercicios';  

  constructor(private http: HttpClient) { }

 

  saveRutinaEjercicio(ejercicio: RutinaEjercicios): Observable<RutinaEjercicios> {
    return this.http.post<RutinaEjercicios>(`${this.apiUrl}/saveRutinaEjercicios`, ejercicio);
  }


}





