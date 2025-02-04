import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePackComponent } from './service-pack.component';

describe('ServicePackComponent', () => {
  let component: ServicePackComponent;
  let fixture: ComponentFixture<ServicePackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicePackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicePackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
