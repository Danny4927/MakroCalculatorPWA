import { TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach } from 'vitest';
import { ResultComponent } from './result.component';
import { provideZonelessChangeDetection } from '@angular/core';
import { CalculationService } from '../../services/calculation/calculation.service';

describe('ResultComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultComponent],
      providers: [
        provideZonelessChangeDetection(),
        CalculationService
      ]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ResultComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show computed tdee from service', () => {
    const fixture = TestBed.createComponent(ResultComponent);
    const service = TestBed.inject(CalculationService);
    service.calculateRMR('1', 80, 'male');
    service.setActivityLevel('3');
    fixture.detectChanges();
    expect(service.tdee()).toBeGreaterThan(0);
  });
});
