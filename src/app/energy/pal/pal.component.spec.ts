import { TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach } from 'vitest';
import { PalComponent } from './pal.component';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('PalComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PalComponent],
      providers: [
        provideZonelessChangeDetection(),
        provideAnimations()
      ]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(PalComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should update service pal when activity level is set', () => {
    const fixture = TestBed.createComponent(PalComponent);
    const comp = fixture.componentInstance;
    comp.pal.set('5');
    comp.setActivityLevel();
    expect(comp['service'].pal()).toBe(1.75);
  });
});
