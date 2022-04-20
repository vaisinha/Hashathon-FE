import { TestBed } from '@angular/core/testing';

import { FetchLeadService } from './fetch-lead.service';

describe('FetchLeadService', () => {
  let service: FetchLeadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchLeadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
