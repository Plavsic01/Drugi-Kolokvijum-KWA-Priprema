import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentPrikazComponent } from './rent-prikaz.component';

describe('RentPrikazComponent', () => {
  let component: RentPrikazComponent;
  let fixture: ComponentFixture<RentPrikazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentPrikazComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentPrikazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
