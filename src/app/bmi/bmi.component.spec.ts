import { TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach } from 'vitest';
import { BMIComponent } from './bmi.component';
import { provideZonelessChangeDetection } from '@angular/core';

describe('BMIComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BMIComponent],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(BMIComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
