import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ejercicio } from '../../models/ejercicio.model';

@Injectable({
  providedIn: 'root'
})
export class EjerciciosService {

  private apiUrl = 'http://localhost:8080/ejercicios';  // Ajusta la URL de tu API

  constructor(private http: HttpClient) { }

  getEjercicios(): Observable<Ejercicio[]> {
    return this.http.get<Ejercicio[]>(`${this.apiUrl}/getEjercicios`);
  }

  getEjerciciosByTipo(tipo: string): Observable<Ejercicio[]> {
    return this.http.get<Ejercicio[]>(`${this.apiUrl}/tipo?tipo=${tipo}`);
  }


  saveEjercicio(ejercicio: Ejercicio): Observable<Ejercicio> {
    return this.http.post<Ejercicio>(`${this.apiUrl}/saveEjercicios`, ejercicio);
  }


}