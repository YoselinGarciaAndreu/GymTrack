import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rutina } from '../../models/rutina.model';

@Injectable({
  providedIn: 'root'
})
export class RutinasService {

  private apiUrl = 'http://localhost:8080/rutinas';  

  constructor(private http: HttpClient) { }

  getRutinas(): Observable<Rutina[]> {
    return this.http.get<Rutina[]>(`${this.apiUrl}/getRutinas`);
  }

  getRutinasByTipo(tipo: string): Observable<Rutina[]> {
    return this.http.get<Rutina[]>(`${this.apiUrl}/tipo?tipo=${tipo}`);
  }


  saveRutina(rutina: Rutina): Observable<Rutina> {
    return this.http.post<Rutina>(`${this.apiUrl}/saveRutinas`, rutina);
  }



  getRutinasByUsuario(dni: string): Observable<Rutina[]> {
    return this.http.get<Rutina[]>(`${this.apiUrl}/usuario/${dni}`);
  }

  getRutinasByDni(dni: string): Observable<Rutina[]> {
    return this.http.get<Rutina[]>(`${this.apiUrl}/dni?dni=${dni}`);
  }


  getRutinasByGuardado(dni: string): Observable<Rutina[]> {
    return this.http.get<Rutina[]>(`${this.apiUrl}/guardado?dni=${dni}`);
  }

  getRutinasByNombre(nombre: string): Observable<Rutina[]> {
    return this.http.get<Rutina[]>(`${this.apiUrl}/nombre?nombre=${nombre}`);
  }
}