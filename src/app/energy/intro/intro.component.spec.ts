import { TestBed } from '@angular/core/testing';
import { describe, it, expect, beforeEach } from 'vitest';
import { IntroComponent } from './intro.component';
import { provideZonelessChangeDetection } from '@angular/core';

describe('IntroComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroComponent],
      providers: [provideZonelessChangeDetection()]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(IntroComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
