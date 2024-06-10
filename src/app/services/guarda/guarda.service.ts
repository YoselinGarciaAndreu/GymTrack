import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Guarda } from 'src/app/models/guarda.model';

@Injectable({
  providedIn: 'root'
})
export class GuardaService {

  private apiUrl = 'http://localhost:8080/guarda';  

  constructor(private http: HttpClient) { }

  saveRutinaUsuario(guardado: Guarda): Observable<Guarda> {
    return this.http.post<Guarda>(`${this.apiUrl}/saveRutinaUsuario`, guardado);
  }

}





