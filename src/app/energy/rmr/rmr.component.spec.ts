import { TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach } from 'vitest';
import { RmrComponent } from './rmr.component';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('RmrComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RmrComponent],
      providers: [
        provideZonelessChangeDetection(),
        provideAnimations()
      ]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(RmrComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should not calculate when weight is null', () => {
    const fixture = TestBed.createComponent(RmrComponent);
    const comp = fixture.componentInstance;
    comp.gender.set('male');
    comp.age.set('1');
    comp.weight.set(null);
    comp.calculateRMR();
    expect(comp.service.rmr()).toBe(0);
  });
});
