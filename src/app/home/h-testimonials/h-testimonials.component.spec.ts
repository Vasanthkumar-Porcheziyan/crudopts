import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HTestimonialsComponent } from './h-testimonials.component';

describe('HTestimonialsComponent', () => {
  let component: HTestimonialsComponent;
  let fixture: ComponentFixture<HTestimonialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HTestimonialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
