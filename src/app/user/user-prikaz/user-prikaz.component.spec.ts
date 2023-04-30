import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPrikazComponent } from './user-prikaz.component';

describe('UserPrikazComponent', () => {
  let component: UserPrikazComponent;
  let fixture: ComponentFixture<UserPrikazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPrikazComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPrikazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
