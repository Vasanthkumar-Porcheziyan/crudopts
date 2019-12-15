import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HTrendingComponent } from './h-trending.component';

describe('HTrendingComponent', () => {
  let component: HTrendingComponent;
  let fixture: ComponentFixture<HTrendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HTrendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HTrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
