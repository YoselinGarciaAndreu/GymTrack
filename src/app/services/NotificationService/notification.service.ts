import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Guarda } from 'src/app/models/guarda.model';
import { EjercicioEntrenamiento } from 'src/app/models/ejercicioEntrenamiento.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {


  constructor(private snackBar: MatSnackBar) { }

  showSuccess(message: string): void {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000, // Duración en milisegundos
      verticalPosition: 'top', // Posición vertical
      horizontalPosition: 'center', // Posición horizontal
    });
  }
}





