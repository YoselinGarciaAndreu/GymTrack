import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editar-rutina',
  templateUrl: './editarRutina.component.html'
})
export class EditarRutinaComponent {
  @Input() isOpen = false;

  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}