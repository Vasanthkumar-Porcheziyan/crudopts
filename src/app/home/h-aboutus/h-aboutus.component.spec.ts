import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HAboutusComponent } from './h-aboutus.component';

describe('HAboutusComponent', () => {
  let component: HAboutusComponent;
  let fixture: ComponentFixture<HAboutusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HAboutusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HAboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
