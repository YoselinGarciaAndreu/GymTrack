import { TestBed } from '@angular/core/testing';
import { CardObserverService } from './cardObserver.service';


describe('CardObserverService', () => {
  let service: CardObserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardObserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
