/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MacroRegiaoService } from './MacroRegiao.service';

describe('Service: MacroRegiao', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MacroRegiaoService]
    });
  });

  it('should ...', inject([MacroRegiaoService], (service: MacroRegiaoService) => {
    expect(service).toBeTruthy();
  }));
});
