import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Entrenamiento } from "src/app/models/entrenamiento.model";


@Injectable({
  providedIn: 'root'
})
export class EntrenamientoService {

  private apiUrl = 'http://localhost:8080/entrenamiento';  

  constructor(private http: HttpClient) { }

  saveEntrenamiento(entrenamiento: Entrenamiento): Observable<Entrenamiento> {
    return this.http.post<Entrenamiento>(`${this.apiUrl}/saveEntrenamiento`, entrenamiento);
  }

}





