import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PalComponent } from './pal.component';

describe('PalComponent', () => {
  let component: PalComponent;
  let fixture: ComponentFixture<PalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
