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

  getRutinasTop(): Observable<Rutina[]> {
    return this.http.get<Rutina[]>(`${this.apiUrl}/getRutinasTop`);
  }
  getRutinasByTipo(tipo: String): Observable<Rutina[]> {
    return this.http.get<Rutina[]>(`${this.apiUrl}/tipo?tipo=${tipo}`);
  }


  saveRutina(rutina: Rutina): Observable<Rutina> {
    return this.http.post<Rutina>(`${this.apiUrl}/saveRutinas`, rutina);
  }



  getRutinasByUsuario(dni: String): Observable<Rutina[]> {
    return this.http.get<Rutina[]>(`${this.apiUrl}/usuario/${dni}`);
  }

  getRutinasByDni(dni: String): Observable<Rutina[]> {
    return this.http.get<Rutina[]>(`${this.apiUrl}/dni?dni=${dni}`);
  }


  getRutinasByGuardado(dni: String): Observable<Rutina[]> {
    return this.http.get<Rutina[]>(`${this.apiUrl}/guardado?dni=${dni}`);
  }

  getRutinasByNombre(nombre: String): Observable<Rutina[]> {
    return this.http.get<Rutina[]>(`${this.apiUrl}/nombre?nombre=${nombre}`);
  }

 

  getSumLikesByUsuario(dni: String): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/cantidadLikes?dni=${dni}`);
  }

  getTopRutinaByLikesForUsuario(dni: String): Observable<Rutina> {
    return this.http.get<Rutina>(`${this.apiUrl}/masGustada?dni=${dni}`);
  }
  


}