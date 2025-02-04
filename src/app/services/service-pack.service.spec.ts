import { TestBed } from '@angular/core/testing';

import { ServicePackService } from './service-pack.service';

describe('ServicePackService', () => {
  let service: ServicePackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
