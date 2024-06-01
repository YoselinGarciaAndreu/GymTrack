import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rutina } from '../../models/rutina.model';

@Injectable({
  providedIn: 'root'
})
export class RutinasService {

  private apiUrl = 'http://localhost:8080/rutinas';  // Ajusta la URL de tu API

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


}