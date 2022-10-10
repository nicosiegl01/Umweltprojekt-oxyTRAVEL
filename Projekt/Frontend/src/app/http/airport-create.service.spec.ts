import { TestBed } from '@angular/core/testing';

import { AirportCreateService } from './airport-create.service';

describe('AirportCreateService', () => {
  let service: AirportCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirportCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
