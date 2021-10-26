import { TestBed } from '@angular/core/testing';

import { PeopleSWService } from './people-sw.service';

describe('PeopleSWService', () => {
  let service: PeopleSWService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeopleSWService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
