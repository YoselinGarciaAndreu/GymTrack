import { TestBed } from '@angular/core/testing';
import { RutinasEjerciciosService } from './rutinasEjercicios.service';


describe('RutinasEjerciciosService', () => {
  let service: RutinasEjerciciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RutinasEjerciciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
