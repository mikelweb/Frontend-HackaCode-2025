import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalServiceListComponent } from './medical-service-list.component';

describe('MedicalServiceComponent', () => {
  let component: MedicalServiceListComponent;
  let fixture: ComponentFixture<MedicalServiceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalServiceListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalServiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
