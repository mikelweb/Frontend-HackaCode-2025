import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePackEditComponent } from './service-pack-edit.component';

describe('ServicePackEditComponent', () => {
  let component: ServicePackEditComponent;
  let fixture: ComponentFixture<ServicePackEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicePackEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicePackEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
