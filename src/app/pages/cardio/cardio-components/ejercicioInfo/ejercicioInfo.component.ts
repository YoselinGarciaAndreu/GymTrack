import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ejercicio-info',
  templateUrl: './ejercicioInfo.component.html'
})
export class EjercicioInfoComponent {
  @Input() isOpen = false;
  @Input() products = [
    { name: 'Apple MacBook Pro 17"', color: 'Silver', category: 'Laptop', price: '$2999' },
    { name: 'Microsoft Surface Pro', color: 'White', category: 'Laptop PC', price: '$1999' },
    { name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', price: '$99' }
  ];

  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }
}