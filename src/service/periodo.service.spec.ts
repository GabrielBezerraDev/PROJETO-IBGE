import { TestBed } from '@angular/core/testing';

import { PeriodoService } from './Periodo.service';

describe('PeriodoService', () => {
  let service: PeriodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeriodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
