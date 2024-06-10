import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-ejercicio-info',
  templateUrl: './ejercicioInfo.component.html'
})
export class EjercicioInfoComponent {
  @Input() isOpen = false;
  @Input() nombre: any;
  @Input() descripcion: any;
  @Input() nombreUsuario: any;
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}



