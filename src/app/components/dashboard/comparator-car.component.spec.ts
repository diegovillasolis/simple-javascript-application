import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparatorCarComponent } from './comparator-car.component';

describe('ComparatorCarComponent', () => {
  let component: ComparatorCarComponent;
  let fixture: ComponentFixture<ComparatorCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparatorCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparatorCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
