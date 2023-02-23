import { TestBed } from '@angular/core/testing';

import { ChuckProxyService } from './chuck-proxy.service';

describe('ChuckProxyService', () => {
  let service: ChuckProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChuckProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
