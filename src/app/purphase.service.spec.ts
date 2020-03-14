import { TestBed } from '@angular/core/testing';

import { PurphaseService } from './purphase.service';

describe('PurphaseService', () => {
  let service: PurphaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurphaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
