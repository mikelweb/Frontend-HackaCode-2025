import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePackAddComponent } from './service-pack-add.component';

describe('ServicePackAddComponent', () => {
  let component: ServicePackAddComponent;
  let fixture: ComponentFixture<ServicePackAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicePackAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicePackAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
