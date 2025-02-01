import { TestBed } from '@angular/core/testing';

import { MedicalServicesService } from './medical-services.service';

describe('MedicalServicesService', () => {
  let service: MedicalServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
