import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RmrComponent } from './rmr.component';

describe('RmrStepComponent', () => {
  let component: RmrComponent;
  let fixture: ComponentFixture<RmrComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RmrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
