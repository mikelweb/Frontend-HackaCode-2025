import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalServiceEditComponent } from './medical-service-edit.component';

describe('MedicalServiceEditComponent', () => {
  let component: MedicalServiceEditComponent;
  let fixture: ComponentFixture<MedicalServiceEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalServiceEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalServiceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
