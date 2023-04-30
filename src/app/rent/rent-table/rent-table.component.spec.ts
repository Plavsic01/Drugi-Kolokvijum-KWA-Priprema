import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentTableComponent } from './rent-table.component';

describe('RentTableComponent', () => {
  let component: RentTableComponent;
  let fixture: ComponentFixture<RentTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
