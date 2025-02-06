import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentEditComponent } from './appointment-edit.component';

describe('AppointmentEditComponent', () => {
  let component: AppointmentEditComponent;
  let fixture: ComponentFixture<AppointmentEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
