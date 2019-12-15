import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HBannerComponent } from './h-banner.component';

describe('HBannerComponent', () => {
  let component: HBannerComponent;
  let fixture: ComponentFixture<HBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
