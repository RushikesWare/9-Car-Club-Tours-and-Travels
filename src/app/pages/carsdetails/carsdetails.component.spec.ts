import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsdetailsComponent } from './carsdetails.component';

describe('CarsdetailsComponent', () => {
  let component: CarsdetailsComponent;
  let fixture: ComponentFixture<CarsdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
