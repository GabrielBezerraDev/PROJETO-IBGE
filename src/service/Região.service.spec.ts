/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RegiãoService } from './Região.service';

describe('Service: Região', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegiãoService]
    });
  });

  it('should ...', inject([RegiãoService], (service: RegiãoService) => {
    expect(service).toBeTruthy();
  }));
});
