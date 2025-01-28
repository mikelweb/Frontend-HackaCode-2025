import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalServiceComponent } from './medical-service.component';

describe('MedicalServiceComponent', () => {
  let component: MedicalServiceComponent;
  let fixture: ComponentFixture<MedicalServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
