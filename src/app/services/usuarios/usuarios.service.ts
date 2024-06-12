import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private apiUrl = 'http://localhost:8080/usuarios';  

  constructor(private http: HttpClient) { }

  saveUsuario(usuario?: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/saveUsuario`, usuario);
  }

  getUsuarioLogin(nombre: String, password: String): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUrl}/login?nombreUsuario=${nombre}&password=${password}`);
  }
}
