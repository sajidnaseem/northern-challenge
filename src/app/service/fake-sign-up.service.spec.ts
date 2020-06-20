import { TestBed } from '@angular/core/testing';

import { FakeSignUpService } from './fake-sign-up.service';

describe('FakeSignUpService', () => {
  let service: FakeSignUpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeSignUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
