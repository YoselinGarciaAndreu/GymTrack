import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ejercicio-info',
  templateUrl: './ejercicioInfo.component.html'
})
export class EjercicioInfoComponent {
  @Input() isOpen = false;

  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}