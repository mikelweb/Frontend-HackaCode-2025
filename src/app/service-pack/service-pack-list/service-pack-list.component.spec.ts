import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePackListComponent } from './service-pack-list.component';

describe('ServicePackComponent', () => {
  let component: ServicePackListComponent;
  let fixture: ComponentFixture<ServicePackListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicePackListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicePackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
