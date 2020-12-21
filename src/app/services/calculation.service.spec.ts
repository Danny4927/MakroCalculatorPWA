import { TestBed } from '@angular/core/testing';

import { CalculationService } from './calculation.service';

describe('CalculationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculationService = TestBed.inject(CalculationService);
    expect(service).toBeTruthy();
  });
});
