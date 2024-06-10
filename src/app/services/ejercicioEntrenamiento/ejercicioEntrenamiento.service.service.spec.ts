import { TestBed } from '@angular/core/testing';
import { EjercicioEntrenamientoService } from './ejercicioEntrenamiento.service';


describe('EjercicioEntrenamientoService', () => {
  let service: EjercicioEntrenamientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EjercicioEntrenamientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
