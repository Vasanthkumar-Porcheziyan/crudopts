import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HEnrollComponent } from './h-enroll.component';

describe('HEnrollComponent', () => {
  let component: HEnrollComponent;
  let fixture: ComponentFixture<HEnrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HEnrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HEnrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
