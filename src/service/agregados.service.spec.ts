/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AgregadosService } from './Pesquisa.service';

describe('Service: Agregados', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgregadosService]
    });
  });

  it('should ...', inject([AgregadosService], (service: AgregadosService) => {
    expect(service).toBeTruthy();
  }));
});
