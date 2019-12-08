import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RmrStepComponent } from './rmr-step.component';

describe('RmrStepComponent', () => {
  let component: RmrStepComponent;
  let fixture: ComponentFixture<RmrStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RmrStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmrStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
