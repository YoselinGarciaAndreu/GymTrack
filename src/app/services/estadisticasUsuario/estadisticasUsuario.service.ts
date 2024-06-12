import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EstadisticasUsuario } from 'src/app/models/estadisticasUsuario.model';

@Injectable({
  providedIn: 'root'
})
export class EstadisticasUsuarioService {

  private apiUrl = 'http://localhost:8080/estadisticasUsuario';  

  constructor(private http: HttpClient) { }


  saveEstadisticas(estadisticasUsuario: EstadisticasUsuario): Observable<EstadisticasUsuario> {
    return this.http.post<EstadisticasUsuario>(`${this.apiUrl}/saveEstadisticas`, estadisticasUsuario);
  }

  getEstadisticasActual(dni: String): Observable<EstadisticasUsuario> {
    return this.http.get<EstadisticasUsuario>(`${this.apiUrl}/actual?dni=${dni}`);
  }

  getUltimasEstadisticas(dni: String): Observable<EstadisticasUsuario[]> {
    return this.http.get<EstadisticasUsuario[]>(`${this.apiUrl}/ultimos?dni=${dni}`);
  }

  // getEjercicios(): Observable<Ejercicio[]> {
  //   return this.http.get<Ejercicio[]>(`${this.apiUrl}/getEjercicios`);
  // }

  // getEjerciciosByTipo(tipo: string): Observable<Ejercicio[]> {
  //   return this.http.get<Ejercicio[]>(`${this.apiUrl}/tipo?tipo=${tipo}`);
  // }

  // getEjerciciosByRutina(rutinaId?: number): Observable<Ejercicio[]> {
  //   return this.http.get<Ejercicio[]>(`${this.apiUrl}/byRutina?rutinaId=${rutinaId}`);
  // }

  // getEjerciciosByDni(dni: String): Observable<Ejercicio[]> {
  //   return this.http.get<Ejercicio[]>(`${this.apiUrl}/dni?dni=${dni}`);
  // }

  // getEjerciciosByNombreBusqueda(nombre: string): Observable<Ejercicio[]> {
  //   return this.http.get<Ejercicio[]>(`${this.apiUrl}/nombreSearch?nombre=${nombre}`);
  // }

  // getEjerciciosByNombreBusquedaByTipo(nombre: string, tipo: string): Observable<Ejercicio[]> {
  //   return this.http.get<Ejercicio[]>(`${this.apiUrl}/nombreSearchTipo?nombre=${nombre}&tipo=${tipo}`);
  // }


  // saveEjercicio(ejercicio: Ejercicio): Observable<Ejercicio> {
  //   return this.http.post<Ejercicio>(`${this.apiUrl}/saveEjercicios`, ejercicio);
  // }

  // getSumLikesByUsuario(dni: String): Observable<number> {
  //   return this.http.get<number>(`${this.apiUrl}/cantidadLikes?dni=${dni}`);
  // }

  // getTopEjercicioByLikesForUsuario(dni: String): Observable<Ejercicio> {
  //   return this.http.get<Ejercicio>(`${this.apiUrl}/masGustado?dni=${dni}`);
  // }
  
}





