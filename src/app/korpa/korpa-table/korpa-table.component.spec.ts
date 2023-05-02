import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KorpaTableComponent } from './korpa-table.component';

describe('KorpaTableComponent', () => {
  let component: KorpaTableComponent;
  let fixture: ComponentFixture<KorpaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KorpaTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KorpaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
