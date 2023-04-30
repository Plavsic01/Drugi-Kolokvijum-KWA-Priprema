import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPrikazComponent } from './book-prikaz.component';

describe('BookPrikazComponent', () => {
  let component: BookPrikazComponent;
  let fixture: ComponentFixture<BookPrikazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookPrikazComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookPrikazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
