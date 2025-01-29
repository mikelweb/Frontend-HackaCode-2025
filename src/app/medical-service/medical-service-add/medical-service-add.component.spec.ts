import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalServiceAddComponent } from './medical-service-add.component';

describe('MedicalServiceAddComponent', () => {
  let component: MedicalServiceAddComponent;
  let fixture: ComponentFixture<MedicalServiceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalServiceAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalServiceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
