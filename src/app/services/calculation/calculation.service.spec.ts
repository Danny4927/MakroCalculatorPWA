import { TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach } from 'vitest';
import { CalculationService } from './calculation.service';
import { provideZonelessChangeDetection } from '@angular/core';

describe('CalculationService', () => {
  let service: CalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection(), CalculationService]
    });
    service = TestBed.inject(CalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('initial rmr should be 0', () => {
    expect(service.rmr()).toBe(0);
  });

  it('initial pal should be 1', () => {
    expect(service.pal()).toBe(1);
  });

  it('tdee should be 0 when rmr is 0', () => {
    expect(service.tdee()).toBe(0);
  });

  it('should calculate rmr for male age group 1 weight 80', () => {
    service.calculateRMR('1', 80, 'male');
    expect(service.rmr()).toBeGreaterThan(0);
  });

  it('should update pal signal on setActivityLevel', () => {
    service.setActivityLevel('3');
    expect(service.pal()).toBe(1.5);
  });

  it('should compute correct tdee after setting rmr and pal', () => {
    service.calculateRMR('1', 80, 'male');
    service.setActivityLevel('3');
    expect(service.tdee()).toBe(service.rmr() * service.pal());
  });

  it('should reset signals to defaults', () => {
    service.calculateRMR('1', 80, 'male');
    service.setActivityLevel('5');
    service.reset();
    expect(service.rmr()).toBe(0);
    expect(service.pal()).toBe(1);
  });
});
